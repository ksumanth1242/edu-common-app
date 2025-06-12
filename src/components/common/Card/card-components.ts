import styled from 'styled-components';
import { whiteColor, FigmaColors, BORDER_RADIUS } from '../../../styles';

interface CardProps {
  variant?: 'outlined' | 'elevation' | 'flat';
  elevation?: number;
  raised?: boolean;
  square?: boolean;
}

export const CardContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${whiteColor};
  color: ${FigmaColors.COLOR_TEXT_MAIN};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: ${({ square }) => (square ? '0' : BORDER_RADIUS.lg)};
  overflow: hidden;

  ${({ variant, elevation }) => {
    if (variant === 'outlined') {
      return `
        border: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
        box-shadow: none;
      `;
    } else if (variant === 'flat') {
      return `
        box-shadow: none;
        border: none;
      `;
    } else {
      const shadowLevel = elevation || 1;

      if (shadowLevel >= 3) {
        return `
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          border: none;
        `;
      } else if (shadowLevel >= 2) {
        return `
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          border: none;
        `;
      } else {
        return `
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          border: none;
        `;
      }
    }
  }}

  ${({ raised }) => {
    if (raised) {
      return `
        &:hover {
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
      `;
    }
  }}

  ${({ onClick }) => {
    if (onClick) {
      return `
        cursor: pointer;
        &:hover {
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
      `;
    }
  }}
`;

export const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${FigmaColors.COLOR_TEXT_MAIN};
`;

export const CardContent = styled.div`
  padding: 16px;
  flex: 1 1 auto;

  &:last-child {
    padding-bottom: 24px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  justify-content: flex-end;

  &:first-child {
    padding-top: 16px;
  }

  &:last-child {
    padding-bottom: 16px;
  }
`;
