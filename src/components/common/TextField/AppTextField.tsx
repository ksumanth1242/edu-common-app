import React from 'react';
import {
  TextFieldContainer,
  StyledInput,
  InputLabel,
  HelperText,
  InputWrapper,
  StartAdornment,
  EndAdornment,
} from './textfield-components';

interface AppTextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled' | 'standard';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  style?: React.CSSProperties;
}

export default function AppTextField({
  label,
  placeholder,
  value,
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
  type = 'text',
  startAdornment,
  endAdornment,
  className,
  id,
  name,
  autoComplete,
  autoFocus = false,
  style,
  ...otherProps
}: AppTextFieldProps & Record<string, unknown>) {
  return (
    <TextFieldContainer
      fullWidth={fullWidth}
      error={error}
      className={className}
      style={style}
    >
      {label && (
        <InputLabel htmlFor={id} required={required} error={error}>
          {label}
        </InputLabel>
      )}
      <InputWrapper>
        {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
        <StyledInput
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          size={size}
          variant={variant}
          error={error}
          style={{
            paddingLeft: startAdornment ? '40px' : undefined,
            paddingRight: endAdornment ? '40px' : undefined,
          }}
          {...otherProps}
        />
        {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      </InputWrapper>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </TextFieldContainer>
  );
}
