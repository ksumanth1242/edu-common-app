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

export const SearchFieldContainer = styled.div<{
  fullWidth?: boolean;
  error?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledSearchInput = styled.input<{
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
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;

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
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 14px;
        height: 40px;
      `;
    } else if (size === 'medium') {
      return `
        padding-top: 12px;
        padding-bottom: 12px;
        font-size: 16px;
        height: 48px;
      `;
    } else if (size === 'large') {
      return `
        padding-top: 16px;
        padding-bottom: 16px;
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

export const SearchLabel = styled.label<{
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

export const SearchHelperText = styled.div<{
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

export const SearchIconButton = styled.button<{
  size?: string;
}>`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${textColorMedium};
  transition: color 0.2s ease-in-out;
  padding: 0;

  &:hover {
    color: ${primaryColor};
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  ${({ size }) => {
    if (size === 'small') {
      return `
        width: 20px;
        height: 20px;
      `;
    } else if (size === 'medium') {
      return `
        width: 24px;
        height: 24px;
      `;
    } else {
      return `
        width: 28px;
        height: 28px;
      `;
    }
  }}
`;

export const ClearIconButton = styled.button<{
  size?: string;
}>`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${textColorMedium};
  transition: color 0.2s ease-in-out;
  border-radius: 50%;
  padding: 2px;

  &:hover {
    color: ${primaryColor};
    background-color: ${FigmaColors.COLOR_PRIMARY50};
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  ${({ size }) => {
    if (size === 'small') {
      return `
        width: 20px;
        height: 20px;
      `;
    } else if (size === 'medium') {
      return `
        width: 24px;
        height: 24px;
      `;
    } else {
      return `
        width: 28px;
        height: 28px;
      `;
    }
  }}
`;
