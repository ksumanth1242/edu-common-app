import React from 'react';
import {
  TextAreaContainer,
  StyledTextArea,
  TextAreaLabel,
  TextAreaHelperText,
} from './textarea-components';

interface AppTextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled' | 'standard';
  rows?: number;
  maxRows?: number;
  minRows?: number;
  className?: string;
  id?: string;
  name?: string;
  autoFocus?: boolean;
  maxLength?: number;
  showCharacterCount?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

export default function AppTextArea({
  label,
  placeholder,
  value = '',
  onChange,
  onBlur,
  onFocus,
  error = false,
  helperText,
  disabled = false,
  required = false,
  fullWidth = true,
  size = 'medium',
  variant = 'outlined',
  rows = 4,
  maxRows,
  minRows,
  className,
  id,
  name,
  autoFocus = false,
  maxLength,
  showCharacterCount = false,
  resize = 'vertical',
  style,
  ...otherProps
}: AppTextAreaProps & Record<string, unknown>) {
  // Calculate character count display
  const characterCount = value ? value.length : 0;
  const displayHelperText = showCharacterCount
    ? maxLength
      ? `${characterCount}/${maxLength} characters${
          helperText ? ` • ${helperText}` : ''
        }`
      : `${characterCount} characters${helperText ? ` • ${helperText}` : ''}`
    : helperText;

  // Handle change with maxLength validation
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (maxLength && inputValue.length > maxLength) {
      return; // Don't update if exceeds max length
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <TextAreaContainer
      fullWidth={fullWidth}
      error={error}
      className={className}
      style={style}
    >
      {label && (
        <TextAreaLabel htmlFor={id} required={required} error={error}>
          {label}
        </TextAreaLabel>
      )}
      <StyledTextArea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        size={size}
        variant={variant}
        error={error}
        resize={resize}
        rows={rows}
        style={{
          minHeight: minRows ? `${minRows * 1.5}em` : undefined,
          maxHeight: maxRows ? `${maxRows * 1.5}em` : undefined,
        }}
        {...otherProps}
      />
      {(displayHelperText || showCharacterCount) && (
        <TextAreaHelperText error={error}>
          <span>{displayHelperText}</span>
        </TextAreaHelperText>
      )}
    </TextAreaContainer>
  );
}
