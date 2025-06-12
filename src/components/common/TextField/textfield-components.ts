import styled from 'styled-components';
import {
  inputBackgroundColor,
  inputBackgroundHoverColor,
  inputBorderColor,
  textColor,
  textColorMedium,
  primaryColor,
  FigmaColors,
} from '../../../styles';

export const TextFieldContainer = styled.div<{
  size?: string;
  fullWidth?: boolean;
  error?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export const StyledInput = styled.input<{
  size?: string;
  error?: boolean;
  variant?: string;
}>`
  border: 1px solid ${inputBorderColor};
  border-radius: 8px;
  outline: none;
  font-family: inherit;
  transition: all 0.2s ease-in-out;
  color: ${textColor};
  background-color: ${inputBackgroundColor};

  &::placeholder {
    color: ${textColorMedium};
    opacity: 1;
  }

  &:hover {
    border-color: ${primaryColor};
    background-color: ${inputBackgroundHoverColor};
  }

  &:focus {
    border-color: ${primaryColor};
    background-color: #fff;
    box-shadow: 0 0 0 2px ${FigmaColors.COLOR_PRIMARY100};
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #e0e0e0;
    color: #999;
    cursor: not-allowed;
  }

  ${({ size }) => {
    if (size === 'small') {
      return `
        padding: 8px 12px;
        font-size: 14px;
        height: 40px;
      `;
    } else if (size === 'medium') {
      return `
        padding: 12px 16px;
        font-size: 16px;
        height: 48px;
      `;
    } else if (size === 'large') {
      return `
        padding: 16px 20px;
        font-size: 18px;
        height: 56px;
      `;
    }
  }}

  ${({ error }) =>
    error &&
    `
    border-color: ${FigmaColors.COLOR_SOFT_RED};
    background-color: #fef2f2;
    
    &:focus {
      border-color: ${FigmaColors.COLOR_SOFT_RED};
      box-shadow: 0 0 0 2px #fecaca;
    }
  `}

  ${({ variant }) => {
    if (variant === 'filled') {
      return `
        background-color: #f5f5f5;
        border: none;
        border-bottom: 2px solid ${inputBorderColor};
        border-radius: 8px 8px 0 0;
        
        &:focus {
          border-bottom-color: ${primaryColor};
          box-shadow: none;
        }
      `;
    } else if (variant === 'standard') {
      return `
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${inputBorderColor};
        border-radius: 0;
        
        &:focus {
          border-bottom-color: ${primaryColor};
          box-shadow: none;
        }
      `;
    }
  }}
`;

export const InputLabel = styled.label<{
  required?: boolean;
  error?: boolean;
}>`
  font-size: 14px;
  font-weight: 500;
  color: ${textColor};
  margin-bottom: 4px;

  ${({ required }) =>
    required &&
    `
    &::after {
      content: ' *';
      color: ${FigmaColors.COLOR_SOFT_RED};
    }
  `}

  ${({ error }) =>
    error &&
    `
    color: ${FigmaColors.COLOR_SOFT_RED};
  `}
`;

export const HelperText = styled.div<{
  error?: boolean;
}>`
  font-size: 12px;
  margin-top: 4px;
  color: ${textColorMedium};

  ${({ error }) =>
    error &&
    `
    color: ${FigmaColors.COLOR_SOFT_RED};
  `}
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StartAdornment = styled.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  color: ${textColorMedium};
  z-index: 1;
`;

export const EndAdornment = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  color: ${textColorMedium};
  z-index: 1;
`;
