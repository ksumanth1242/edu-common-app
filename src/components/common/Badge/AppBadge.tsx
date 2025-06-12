import React from 'react';
import { BadgeContainer } from './badge-components';

interface AppBadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
  invisible?: boolean;
  max?: number;
  badgeContent?: React.ReactNode;
  showZero?: boolean;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
}

export default function AppBadge({
  variant = 'primary',
  size = 'medium',
  children,
  className,
  invisible = false,
  max = 99,
  badgeContent,
  showZero = false,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  ...otherProps
}: AppBadgeProps & Record<string, unknown>) {
  const shouldShowBadge = () => {
    if (invisible) return false;
    if (badgeContent === 0 && !showZero) return false;
    return badgeContent !== undefined && badgeContent !== null;
  };

  const getBadgeContent = () => {
    if (typeof badgeContent === 'number' && badgeContent > max) {
      return `${max}+`;
    }
    return badgeContent;
  };

  return (
    <BadgeContainer
      variant={variant}
      size={size}
      className={className}
      anchorOrigin={anchorOrigin}
      showBadge={shouldShowBadge()}
      {...otherProps}
    >
      {children}
      {shouldShowBadge() && (
        <span className="badge-content">{getBadgeContent()}</span>
      )}
    </BadgeContainer>
  );
}
