import styled from 'styled-components';
import {
  primaryColor,
  whiteColor,
  FigmaColors,
  BORDER_RADIUS,
  Z_INDEX,
} from '../../../styles';

interface DropdownProps {
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  isOpen?: boolean;
  fullWidth?: boolean;
  selected?: boolean;
}

export const DropdownContainer = styled.div<Pick<DropdownProps, 'fullWidth'>>`
  position: relative;
  display: inline-block;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  .helper-text {
    margin-top: 3px;
    font-size: 12px;
    color: ${FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM};

    &.error {
      color: #d32f2f;
    }
  }
`;

export const DropdownButton = styled.button<DropdownProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${whiteColor};
  border: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
  border-radius: ${BORDER_RADIUS.md};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${primaryColor};
    box-shadow: 0 0 0 2px ${primaryColor}20;
  }

  ${({ size }) => {
    if (size === 'small') {
      return `
        padding: 8px 12px;
        height: 32px;
        font-size: 13px;
      `;
    } else if (size === 'large') {
      return `
        padding: 12px 16px;
        height: 48px;
        font-size: 16px;
      `;
    } else {
      return `
        padding: 10px 14px;
        height: 40px;
        font-size: 14px;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === 'filled') {
      return `
        background-color: ${FigmaColors.COLOR_BACKGROUND};
        border: none;
        border-bottom: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
        border-radius: ${BORDER_RADIUS.md} ${BORDER_RADIUS.md} 0 0;
      `;
    } else if (variant === 'standard') {
      return `
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
        border-radius: 0;
      `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return `
        opacity: 0.6;
        cursor: not-allowed;
        background-color: ${FigmaColors.COLOR_BACKGROUND};
      `;
    }
  }}

  ${({ error }) => {
    if (error) {
      return `
        border-color: #d32f2f;
        &:focus {
          border-color: #d32f2f;
          box-shadow: 0 0 0 2px #d32f2f20;
        }
      `;
    }
  }}

  .dropdown-value {
    flex: 1;
    text-align: left;
    color: ${FigmaColors.COLOR_TEXT_MAIN};
  }

  .dropdown-arrow {
    margin-left: 8px;
    transition: transform 0.2s ease-in-out;
    color: ${FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM};
    font-size: 12px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${whiteColor};
  border: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
  border-radius: ${BORDER_RADIUS.md};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: ${Z_INDEX.dropdown};
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`;

export const DropdownItem = styled.div<
  Pick<DropdownProps, 'disabled' | 'selected'>
>`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${FigmaColors.COLOR_TEXT_MAIN};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${FigmaColors.COLOR_BACKGROUND};
  }

  &:first-child {
    border-radius: ${BORDER_RADIUS.md} ${BORDER_RADIUS.md} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${BORDER_RADIUS.md} ${BORDER_RADIUS.md};
  }

  ${({ selected }) => {
    if (selected) {
      return `
        background-color: ${primaryColor}10;
        color: ${primaryColor};
        font-weight: 500;
      `;
    }
  }}

  ${({ disabled }) => {
    if (disabled) {
      return `
        opacity: 0.6;
        cursor: not-allowed;
        &:hover {
          background-color: transparent;
        }
      `;
    }
  }}
`;
