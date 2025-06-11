// Performance monitoring utilities

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: PerformanceMemory;
}

/**
 * Performance measurement utility
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private measurements: Map<string, number> = new Map();

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Start measuring performance for a given operation
   */
  public startMeasurement(name: string): void {
    this.measurements.set(name, performance.now());
  }

  /**
   * End measurement and return duration in milliseconds
   */
  public endMeasurement(name: string): number {
    const startTime = this.measurements.get(name);
    if (!startTime) {
      // Only warn in development mode
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(`No measurement started for: ${name}`);
      }
      return 0;
    }

    const duration = performance.now() - startTime;
    this.measurements.delete(name);
    return duration;
  }

  /**
   * Measure execution time of a function
   */
  public async measureFunction<T>(
    name: string,
    fn: () => Promise<T> | T
  ): Promise<{ result: T; duration: number }> {
    this.startMeasurement(name);
    const result = await fn();
    const duration = this.endMeasurement(name);
    return { result, duration };
  }
}

/**
 * Debounce function for performance optimization
 */
export const createDebounceFunction = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function for performance optimization
 */
export const createThrottleFunction = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastExecution = 0;
  return (...args: Parameters<T>): void => {
    const now = Date.now();
    if (now - lastExecution >= delay) {
      func(...args);
      lastExecution = now;
    }
  };
};

/**
 * Lazy loading utility for images
 */
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

/**
 * Memory usage monitoring
 */
export const getMemoryUsage = (): {
  used: number;
  total: number;
  percentage: number;
} | null => {
  const performanceWithMemory = performance as PerformanceWithMemory;
  if (performanceWithMemory.memory) {
    const memory = performanceWithMemory.memory;
    return {
      used: memory.usedJSHeapSize,
      total: memory.totalJSHeapSize,
      percentage: (memory.usedJSHeapSize / memory.totalJSHeapSize) * 100,
    };
  }
  return null;
};

/**
 * Web Vitals measurement
 */
export const measureWebVitals = (): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Measure First Contentful Paint
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      // Note: Only log in development mode to avoid console spam in production
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Navigation timing:', {
          domContentLoaded:
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        });
      }
    });
  }
};
