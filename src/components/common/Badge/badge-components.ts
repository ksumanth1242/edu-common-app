import styled from 'styled-components';
import {
  primaryColor,
  whiteColor,
  softGreenColor,
  softRedColor,
  FigmaColors,
  TYPOGRAPHY,
} from '../../../styles';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  showBadge?: boolean;
}

export const BadgeContainer = styled.div<BadgeProps>`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;

  .badge-content {
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    place-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: ${TYPOGRAPHY.fontWeight.medium};
    z-index: 1;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;

    ${({ anchorOrigin }) => {
      const { vertical, horizontal } = anchorOrigin || {
        vertical: 'top',
        horizontal: 'right',
      };

      if (vertical === 'top' && horizontal === 'right') {
        return `
          top: 0;
          right: 0;
          transform: scale(1) translate(50%, -50%);
          transform-origin: 100% 0%;
        `;
      } else if (vertical === 'top' && horizontal === 'left') {
        return `
          top: 0;
          left: 0;
          transform: scale(1) translate(-50%, -50%);
          transform-origin: 0% 0%;
        `;
      } else if (vertical === 'bottom' && horizontal === 'right') {
        return `
          bottom: 0;
          right: 0;
          transform: scale(1) translate(50%, 50%);
          transform-origin: 100% 100%;
        `;
      } else if (vertical === 'bottom' && horizontal === 'left') {
        return `
          bottom: 0;
          left: 0;
          transform: scale(1) translate(-50%, 50%);
          transform-origin: 0% 100%;
        `;
      }
    }}

    ${({ size }) => {
      if (size === 'small') {
        return `
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          font-size: 10px;
        `;
      } else if (size === 'large') {
        return `
          min-width: 24px;
          height: 24px;
          padding: 0 6px;
          font-size: 14px;
        `;
      } else {
        return `
          min-width: 20px;
          height: 20px;
          padding: 0 6px;
          font-size: 12px;
        `;
      }
    }}

    ${({ variant }) => {
      if (variant === 'primary') {
        return `
          background-color: ${primaryColor};
          color: ${whiteColor};
        `;
      } else if (variant === 'secondary') {
        return `
          background-color: ${FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM};
          color: ${whiteColor};
        `;
      } else if (variant === 'success') {
        return `
          background-color: ${softGreenColor};
          color: ${whiteColor};
        `;
      } else if (variant === 'warning') {
        return `
          background-color: #ff9800;
          color: ${whiteColor};
        `;
      } else if (variant === 'error') {
        return `
          background-color: ${softRedColor};
          color: ${whiteColor};
        `;
      } else if (variant === 'info') {
        return `
          background-color: ${FigmaColors.COLOR_ACCENT_BLUE};
          color: ${whiteColor};
        `;
      }
    }}

    ${({ showBadge }) => {
      if (!showBadge) {
        return `
          transform: scale(0);
        `;
      }
    }}
  }
`;
