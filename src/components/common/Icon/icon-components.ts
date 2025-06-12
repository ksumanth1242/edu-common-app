import styled from 'styled-components';
import { primaryColor, FigmaColors } from '../../../styles';

interface IconProps {
  size?: 'small' | 'medium' | 'large' | number;
  color?: 'primary' | 'secondary' | 'inherit' | 'disabled' | string;
  clickable?: boolean;
}

export const IconContainer = styled.div<IconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  flex-shrink: 0;
  user-select: none;

  ${({ size }) => {
    if (typeof size === 'number') {
      return `
        width: ${size}px;
        height: ${size}px;
        font-size: ${size}px;
      `;
    }

    if (size === 'small') {
      return `
        width: 20px;
        height: 20px;
        font-size: 20px;
      `;
    } else if (size === 'large') {
      return `
        width: 32px;
        height: 32px;
        font-size: 32px;
      `;
    } else {
      return `
        width: 24px;
        height: 24px;
        font-size: 24px;
      `;
    }
  }}

  ${({ color }) => {
    if (color === 'primary') {
      return `color: ${primaryColor};`;
    } else if (color === 'secondary') {
      return `color: ${FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM};`;
    } else if (color === 'disabled') {
      return `color: ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};`;
    } else if (color === 'inherit') {
      return `color: inherit;`;
    } else if (typeof color === 'string' && color.startsWith('#')) {
      return `color: ${color};`;
    } else {
      return `color: inherit;`;
    }
  }}

  ${({ clickable }) => {
    if (clickable) {
      return `
        cursor: pointer;
        border-radius: 50%;
        transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        
        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
        
        &:active {
          background-color: rgba(0, 0, 0, 0.08);
        }
      `;
    }
  }}
`;
