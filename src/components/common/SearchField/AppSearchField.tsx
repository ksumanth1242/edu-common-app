import React, { useState, useCallback } from 'react';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';
import {
  SearchFieldContainer,
  SearchInputWrapper,
  StyledSearchInput,
  SearchLabel,
  SearchHelperText,
  SearchIconButton,
  ClearIconButton,
} from './searchfield-components';

interface AppSearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled' | 'standard';
  className?: string;
  id?: string;
  name?: string;
  autoFocus?: boolean;
  debounceMs?: number;
  showClearButton?: boolean;
  searchOnType?: boolean;
  label?: string;
  error?: boolean;
  helperText?: string;
  style?: React.CSSProperties;
}

export default function AppSearchField({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSearch,
  onClear,
  disabled = false,
  fullWidth = true,
  size = 'medium',
  variant = 'outlined',
  className,
  id,
  name,
  autoFocus = false,
  debounceMs = 300,
  showClearButton = true,
  searchOnType = true,
  label,
  error = false,
  helperText,
  style,
  ...otherProps
}: AppSearchFieldProps & Record<string, unknown>) {
  const [internalValue, setInternalValue] = useState(value);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );

  // Debounced search function
  const debouncedSearch = useCallback(
    (searchValue: string) => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }

      const timer = setTimeout(() => {
        if (onSearch) {
          onSearch(searchValue);
        }
      }, debounceMs);

      setDebounceTimer(timer);
    },
    [debounceMs, onSearch, debounceTimer]
  );

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);

    if (onChange) {
      onChange(newValue);
    }

    // Trigger search automatically if searchOnType is enabled
    if (searchOnType) {
      debouncedSearch(newValue);
    }
  };

  // Handle search button click
  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(internalValue);
    }
  };

  // Handle clear button click
  const handleClearClick = () => {
    setInternalValue('');

    if (onChange) {
      onChange('');
    }

    if (onClear) {
      onClear();
    }

    // If searchOnType is enabled, search with empty value
    if (searchOnType && onSearch) {
      onSearch('');
    }
  };

  // Handle Enter key press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (onSearch) {
        onSearch(internalValue);
      }
    }
  };

  // Determine which value to use (controlled vs uncontrolled)
  const displayValue = value !== undefined ? value : internalValue;

  return (
    <SearchFieldContainer
      fullWidth={fullWidth}
      error={error}
      className={className}
      style={style}
    >
      {label && (
        <SearchLabel htmlFor={id} error={error}>
          {label}
        </SearchLabel>
      )}
      <SearchInputWrapper>
        <SearchIconButton
          type="button"
          onClick={handleSearchClick}
          disabled={disabled}
          size={size}
          aria-label="search"
        >
          <SearchIcon fontSize="inherit" />
        </SearchIconButton>

        <StyledSearchInput
          id={id}
          name={name}
          type="search"
          placeholder={placeholder}
          value={displayValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          autoFocus={autoFocus}
          size={size}
          variant={variant}
          error={error}
          {...otherProps}
        />

        {showClearButton && displayValue && (
          <ClearIconButton
            type="button"
            onClick={handleClearClick}
            disabled={disabled}
            size={size}
            aria-label="clear search"
          >
            <ClearIcon fontSize="inherit" />
          </ClearIconButton>
        )}
      </SearchInputWrapper>

      {helperText && (
        <SearchHelperText error={error}>{helperText}</SearchHelperText>
      )}
    </SearchFieldContainer>
  );
}
