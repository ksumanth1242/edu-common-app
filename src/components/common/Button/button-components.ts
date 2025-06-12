import styled from 'styled-components';
import {
  primaryColor,
  whiteColor,
  softBlueColor,
  primaryHoverColor,
  primaryActiveColor,
  softGreenColor,
  softRedColor,
  FigmaColors,
} from '../../../styles';

export const ButtonContainer = styled.button<{
  variant?: string;
  size?: string;
  height?: string;
  width?: string;
}>`
  min-width: 100px;
  border: 0 none;
  border-radius: 4px;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &.with-animation {
    animation: size-scale 2s infinite ease;
    box-shadow: 0 0 15px rgb(0 0 0 / 25%);
  }

  @keyframes size-scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  
  ${({ size }) => {
    if (size === 'large') {
      return `
        font-size: 15px;
        font-weight: 600;
        border-radius: 12px;
        padding: 10px 20px;
        height: 48px;
      `;
    } else if (size === 'medium') {
      return `
        font-size: 14px;
        font-weight: 600;
        border-radius: 8px;
        padding: 10px 20px;
        height: 40px;
      `;
    } else if (size === 'small') {
      return `
        font-size: 13px;
        font-weight: 500;
        border-radius: 8px;
        padding: 8px 16px;
        height: 32px;
      `;
    }
  }}
  
  ${({ variant }) => {
    if (variant === 'primary') {
      return `
        background-color: ${primaryColor};
        color: ${whiteColor};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${primaryHoverColor};
        }
        
        &:active:not(:disabled) {
          background-color: ${primaryActiveColor};
        }
      `;
    } else if (variant === 'secondary') {
      return `
        background-color: ${softBlueColor};
        color: ${primaryColor};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${FigmaColors.COLOR_PRIMARY100};
        }
      `;
    } else if (variant === 'primaryLight') {
      return `
        background-color: ${softBlueColor};
        color: ${primaryColor};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${FigmaColors.COLOR_PRIMARY100};
        }
      `;
    } else if (variant === 'outlined') {
      return `
        background-color: transparent;
        color: ${primaryColor};
        border: 1px solid ${primaryColor};
        
        &:hover:not(:disabled) {
          background-color: ${softBlueColor};
        }
      `;
    } else if (variant === 'success') {
      return `
        background-color: ${softGreenColor};
        color: ${whiteColor};
        border: 1px solid ${softGreenColor};
        
        &:hover:not(:disabled) {
          background-color: #1ea653;
        }
      `;
    } else if (variant === 'successLight') {
      return `
        background-color: #E6F4E6;
        color: ${softGreenColor};
        border: 1px solid #B6E2B6;
        
        &:hover:not(:disabled) {
          background-color: #D4E8D4;
        }
      `;
    } else if (variant === 'danger') {
      return `
        background-color: ${softRedColor};
        color: ${whiteColor};
        border: 1px solid ${FigmaColors.COLOR_SOFT_RED};
        
        &:hover:not(:disabled) {
          background-color: #DC3545;
        }
      `;
    } else if (variant === 'contained') {
      return `
        background-color: ${primaryColor};
        color: ${whiteColor};
        border: 1px solid ${primaryColor};
        
        &:hover:not(:disabled) {
          background-color: ${primaryHoverColor};
        }
      `;
    } else if (variant === 'icon') {
      return `
        min-width: 25px;
        padding: 0;
        background-color: transparent;
        color: ${primaryColor};
        border: none;
        border-radius: 50%;
        
        &:hover:not(:disabled) {
          background-color: ${softBlueColor};
        }
      `;
    } else if (variant === 'primaryBold') {
      return `
        background-color: ${FigmaColors.COLOR_PRIMARY800};
        color: ${whiteColor};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background-color: ${FigmaColors.COLOR_PRIMARY700};
        }
      `;
    }
  }}
`;
