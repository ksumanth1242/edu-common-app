import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const baseClasses =
    'font-medium rounded-lg focus:outline-none focus:ring-4 transition-colors';

  const variantClasses = {
    primary: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
    secondary:
      'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200',
    danger: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',
  };

  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-5 py-2.5 text-sm',
    large: 'px-6 py-3 text-base',
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};
