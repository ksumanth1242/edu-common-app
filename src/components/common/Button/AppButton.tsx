import React from 'react';
import { ButtonContainer } from './button-components';
import { Box } from '@mui/material';

interface AppButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'primaryLight'
    | 'outlined'
    | 'success'
    | 'successLight'
    | 'danger'
    | 'contained'
    | 'icon'
    | 'primaryBold';
  size?: 'small' | 'medium' | 'large';
  height?: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  className?: string;
  refevar?: React.Ref<HTMLButtonElement>;
  disabled?: boolean;
  sx?: object;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function AppButton({
  variant = 'primary',
  size = 'large',
  height = '48px',
  width = '100%',
  type = 'button',
  onClick,
  children,
  className,
  refevar,
  disabled,
  sx,
  style,
  startIcon,
  endIcon,
  ...otherProps
}: AppButtonProps & Record<string, unknown>) {
  return (
    <ButtonContainer
      variant={variant}
      size={size}
      height={height}
      width={width}
      type={type}
      onClick={onClick}
      className={className}
      ref={refevar}
      disabled={disabled}
      style={style}
      {...otherProps}
    >
      {startIcon && <Box sx={{ mr: 1 }}>{startIcon}</Box>}
      {children}
      {endIcon && <Box sx={{ ml: 1 }}>{endIcon}</Box>}
    </ButtonContainer>
  );
}
