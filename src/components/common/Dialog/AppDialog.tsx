import React from 'react';
import {
  DialogContainer,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogActions,
} from './dialog-components';

interface AppDialogProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
  fullScreen?: boolean;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
}

export default function AppDialog({
  open,
  onClose,
  children,
  title,
  actions,
  className,
  maxWidth = 'sm',
  fullWidth = false,
  fullScreen = false,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  ...otherProps
}: AppDialogProps & Record<string, unknown>) {
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !disableEscapeKeyDown && onClose) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, disableEscapeKeyDown, onClose]);

  if (!open) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (
      event.target === event.currentTarget &&
      !disableBackdropClick &&
      onClose
    ) {
      onClose();
    }
  };

  return (
    <DialogBackdrop onClick={handleBackdropClick}>
      <DialogContainer
        className={className}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        fullScreen={fullScreen}
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
        {...otherProps}
      >
        {title && <DialogHeader>{title}</DialogHeader>}
        <DialogContent>{children}</DialogContent>
        {actions && <DialogActions>{actions}</DialogActions>}
      </DialogContainer>
    </DialogBackdrop>
  );
}
