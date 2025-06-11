// Security utility functions

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Validates and sanitizes user input
 */
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

/**
 * Checks if a URL is safe (same origin or whitelisted domains)
 */
export const isSafeUrl = (
  url: string,
  allowedDomains: string[] = []
): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin);

    // Allow same origin
    if (urlObj.origin === window.location.origin) {
      return true;
    }

    // Check against whitelist
    return allowedDomains.some(domain => urlObj.hostname === domain);
  } catch {
    return false;
  }
};

/**
 * Generates a cryptographically secure random string
 */
export const generateSecureId = (length: number = 32): string => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Content Security Policy configuration
 */
export const cspConfig = {
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'", "'unsafe-inline'"],
  styleSrc: ["'self'", "'unsafe-inline'"],
  imgSrc: ["'self'", 'data:', 'https:'],
  connectSrc: ["'self'"],
  fontSrc: ["'self'"],
  objectSrc: ["'none'"],
  mediaSrc: ["'self'"],
  frameSrc: ["'none'"],
};
