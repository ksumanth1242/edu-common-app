import React from 'react';
import {
  CardContainer,
  CardHeader,
  CardContent,
  CardActions,
} from './card-components';

interface AppCardProps {
  variant?: 'outlined' | 'elevation' | 'flat';
  elevation?: number;
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  actions?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  raised?: boolean;
  square?: boolean;
}

export default function AppCard({
  variant = 'elevation',
  elevation = 1,
  children,
  className,
  header,
  actions,
  onClick,
  raised = false,
  square = false,
  ...otherProps
}: AppCardProps & Record<string, unknown>) {
  return (
    <CardContainer
      variant={variant}
      elevation={elevation}
      className={className}
      onClick={onClick}
      raised={raised}
      square={square}
      {...otherProps}
    >
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </CardContainer>
  );
}
