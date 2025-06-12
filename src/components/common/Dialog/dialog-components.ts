import styled from 'styled-components';
import {
  whiteColor,
  FigmaColors,
  BORDER_RADIUS,
  Z_INDEX,
} from '../../../styles';

interface DialogProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
  fullScreen?: boolean;
}

export const DialogBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${Z_INDEX.modal};
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const DialogContainer = styled.div<DialogProps>`
  display: flex;
  flex-direction: column;
  margin: 32px;
  position: relative;
  overflow-y: auto;
  background-color: ${whiteColor};
  color: ${FigmaColors.COLOR_TEXT_MAIN};
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: ${BORDER_RADIUS.lg};
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
    0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);

  ${({ fullScreen }) => {
    if (fullScreen) {
      return `
        margin: 0;
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
        border-radius: 0;
      `;
    }
  }}

  ${({ maxWidth }) => {
    if (maxWidth === false) {
      return `max-width: none;`;
    }

    const widths = {
      xs: '444px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    };

    return `max-width: ${widths[maxWidth || 'sm']};`;
  }}

  ${({ fullWidth }) => {
    if (fullWidth) {
      return `width: calc(100% - 64px);`;
    }
  }}
`;

export const DialogHeader = styled.div`
  margin: 0;
  padding: 16px 24px;
  flex: 0 0 auto;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  color: ${FigmaColors.COLOR_TEXT_MAIN};
  border-bottom: 1px solid ${FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT};
`;

export const DialogContent = styled.div`
  flex: 1 1 auto;
  padding: 20px 24px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &:first-child {
    padding-top: 20px;
  }
`;

export const DialogActions = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  justify-content: flex-end;
  flex: 0 0 auto;
  gap: 8px;

  & > :not(:first-of-type) {
    margin-left: 8px;
  }
`;
