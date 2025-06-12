import React from 'react';
import { IconContainer } from './icon-components';

interface AppIconProps {
  name?: string;
  size?: 'small' | 'medium' | 'large' | number;
  color?: 'primary' | 'secondary' | 'inherit' | 'disabled' | string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export default function AppIcon({
  name,
  size = 'medium',
  color = 'inherit',
  children,
  className,
  onClick,
  style,
  ...otherProps
}: AppIconProps & Record<string, unknown>) {
  return (
    <IconContainer
      size={size}
      color={color}
      className={className}
      onClick={onClick}
      style={style}
      clickable={!!onClick}
      {...otherProps}
    >
      {children || name}
    </IconContainer>
  );
}
