import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns initial value when localStorage is empty', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    expect(result.current[0]).toBe('initial');
  });

  it('returns stored value from localStorage', () => {
    localStorageMock.getItem.mockReturnValue(JSON.stringify('stored-value'));
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    expect(result.current[0]).toBe('stored-value');
  });

  it('updates localStorage when value changes', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'test-key',
      JSON.stringify('new-value')
    );
    expect(result.current[0]).toBe('new-value');
  });

  it('works with function updater', () => {
    localStorageMock.getItem.mockReturnValue(JSON.stringify('old-value'));
    const { result } = renderHook(() => useLocalStorage('test-key', 'initial'));

    act(() => {
      result.current[1](prev => `${prev}-updated`);
    });

    expect(result.current[0]).toBe('old-value-updated');
  });

  it('handles localStorage errors gracefully', () => {
    localStorageMock.getItem.mockImplementation(() => {
      throw new Error('localStorage error');
    });

    const { result } = renderHook(() =>
      useLocalStorage('test-key', 'fallback')
    );

    expect(result.current[0]).toBe('fallback');
  });
});
