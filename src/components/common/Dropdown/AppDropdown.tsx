import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from './dropdown-components';

interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface AppDropdownProps {
  options: DropdownOption[];
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
}

export default function AppDropdown({
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  disabled = false,
  className,
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  error = false,
  helperText,
  ...otherProps
}: AppDropdownProps & Record<string, unknown>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: DropdownOption) => {
    if (!option.disabled && onChange) {
      onChange(option.value);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <DropdownContainer
      ref={dropdownRef}
      className={className}
      fullWidth={fullWidth}
      {...otherProps}
    >
      <DropdownButton
        variant={variant}
        size={size}
        disabled={disabled}
        error={error}
        isOpen={isOpen}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="dropdown-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="dropdown-arrow">▼</span>
      </DropdownButton>

      {isOpen && (
        <DropdownMenu role="listbox">
          {options.map((option, index) => (
            <DropdownItem
              key={option.value}
              disabled={option.disabled}
              selected={option.value === value}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option.value === value}
              tabIndex={option.disabled ? -1 : 0}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}

      {helperText && (
        <div className={`helper-text ${error ? 'error' : ''}`}>
          {helperText}
        </div>
      )}
    </DropdownContainer>
  );
}
