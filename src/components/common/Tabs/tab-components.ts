import styled from 'styled-components';
import {
  primaryColor,
  textColor,
  softGreenColor,
  FigmaColors,
  TYPOGRAPHY,
} from '../../../styles';

type Props = {
  isSelected?: boolean;
  type?: 'primary' | 'secondary' | 'custom-yellow' | 'BlueColor' | 'header';
  isDisabled?: boolean;
  theme?: string;
};

export const TabContainer = styled.div<{ type?: string }>`
  width: 100%;
  display: inline-flex;
  ${({ type }) => {
    if (type === 'header') {
      return `
        background: ${FigmaColors.COLOR_BACKGROUND};
        border: none;
        outline: none;
      `;
    }
  }}
`;

export const Tab = styled.div<Props>`
  padding: 8px;
  margin: 0 12px;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
  display: flex;
  color: ${FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM};
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    position: absolute;
    bottom: -1px;
    left: 0;
  }

  ${({ isDisabled }) => {
    if (isDisabled) {
      return `
        color: red !important;
        font-weight: ${TYPOGRAPHY.fontWeight.bold};
        pointer-events: none;
        cursor: none !important;
        opacity: 0.2 !important;
        &::after {
          background-color: red;
        }
      `;
    }
  }}

  ${({ isSelected, type, isDisabled }) => {
    if (isDisabled) {
      return `	
        color: red !important;	
        font-weight: ${TYPOGRAPHY.fontWeight.bold};	
        pointer-events: none;	
        opacity: 0.2 !important;	
      `;
    } else {
      if (isSelected) {
        if (type === 'secondary') {
          return `
            color: ${textColor};
            font-weight: ${TYPOGRAPHY.fontWeight.bold};
            &::after {
              background-color: ${softGreenColor};
            }
          `;
        } else if (type === 'custom-yellow') {
          return `
            color: ${textColor};
            font-weight: ${TYPOGRAPHY.fontWeight.bold};
            &::after {
              background-color: #FFC06C;
            }
          `;
        } else if (type === 'BlueColor') {
          return `
            color: ${primaryColor};
            font-weight: ${TYPOGRAPHY.fontWeight.bold};
            &::after {
              background-color: ${primaryColor};
            }
          `;
        } else {
          return `
            color: ${primaryColor}; 
            font-weight: ${TYPOGRAPHY.fontWeight.bold};               
            &::after {
              background-color: ${primaryColor};
            }
          `;
        }
      }
    }
  }}
`;
