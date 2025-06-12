import { createTheme, ThemeOptions } from '@mui/material/styles';
import {
  COLORS,
  TYPOGRAPHY,
  BORDER_RADIUS,
  SHADOWS,
  BREAKPOINTS,
  FigmaColors,
} from './constants';

// Custom theme configuration for Material UI
export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primary.main,
      light: COLORS.primary.light,
      dark: COLORS.primary.dark,
      contrastText: COLORS.primary.contrastText,
    },
    secondary: {
      main: COLORS.secondary.main,
      light: COLORS.secondary.light,
      dark: COLORS.secondary.dark,
      contrastText: COLORS.secondary.contrastText,
    },
    error: {
      main: COLORS.error.main,
      light: COLORS.error.light,
      dark: COLORS.error.dark,
      contrastText: COLORS.error.contrastText,
    },
    warning: {
      main: COLORS.warning.main,
      light: COLORS.warning.light,
      dark: COLORS.warning.dark,
      contrastText: COLORS.warning.contrastText,
    },
    info: {
      main: COLORS.info.main,
      light: COLORS.info.light,
      dark: COLORS.info.dark,
      contrastText: COLORS.info.contrastText,
    },
    success: {
      main: COLORS.success.main,
      light: COLORS.success.light,
      dark: COLORS.success.dark,
      contrastText: COLORS.success.contrastText,
    },
    grey: COLORS.grey,
    background: {
      default: FigmaColors.COLOR_BACKGROUND,
      paper: FigmaColors.COLOR_WHITE,
    },
    text: {
      primary: FigmaColors.COLOR_TEXT_MAIN,
      secondary: FigmaColors.COLOR_TEXT_MAIN_MEDIUM,
      disabled: FigmaColors.COLOR_TEXT_MAIN_LIGHT,
    },
  },
  typography: {
    fontFamily: TYPOGRAPHY.fontFamily.primary,
    fontSize: 14,
    h1: {
      fontSize: TYPOGRAPHY.fontSize['5xl'],
      fontWeight: TYPOGRAPHY.fontWeight.bold,
      lineHeight: TYPOGRAPHY.lineHeight.tight,
      color: FigmaColors.COLOR_TEXT_MAIN,
    },
    h2: {
      fontSize: TYPOGRAPHY.fontSize['4xl'],
      fontWeight: TYPOGRAPHY.fontWeight.bold,
      lineHeight: TYPOGRAPHY.lineHeight.tight,
      color: FigmaColors.COLOR_TEXT_MAIN,
    },
    h3: {
      fontSize: TYPOGRAPHY.fontSize['3xl'],
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      lineHeight: TYPOGRAPHY.lineHeight.tight,
      color: FigmaColors.COLOR_TEXT_MAIN,
    },
    h4: {
      fontSize: TYPOGRAPHY.fontSize['2xl'],
      fontWeight: TYPOGRAPHY.fontWeight.semibold,
      lineHeight: TYPOGRAPHY.lineHeight.tight,
      color: FigmaColors.COLOR_TEXT_MAIN,
    },
    h5: {
      fontSize: TYPOGRAPHY.fontSize.xl,
      fontWeight: TYPOGRAPHY.fontWeight.medium,
      lineHeight: TYPOGRAPHY.lineHeight.normal,
      color: FigmaColors.COLOR_TEXT_MAIN,
    },
    h6: {
      fontSize: TYPOGRAPHY.fontSize.lg,
      fontWeight: TYPOGRAPHY.fontWeight.medium,
      lineHeight: TYPOGRAPHY.lineHeight.normal,
      color: FigmaColors.COLOR_TEXT_MAIN,
    },
    body1: {
      fontSize: TYPOGRAPHY.fontSize.base,
      fontWeight: TYPOGRAPHY.fontWeight.regular,
      lineHeight: TYPOGRAPHY.lineHeight.normal,
      color: FigmaColors.COLOR_BODY_TEXT_MAIN,
    },
    body2: {
      fontSize: TYPOGRAPHY.fontSize.sm,
      fontWeight: TYPOGRAPHY.fontWeight.regular,
      lineHeight: TYPOGRAPHY.lineHeight.normal,
      color: FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM,
    },
    button: {
      fontSize: TYPOGRAPHY.fontSize.sm,
      fontWeight: TYPOGRAPHY.fontWeight.medium,
      textTransform: 'none',
    },
    caption: {
      fontSize: TYPOGRAPHY.fontSize.xs,
      fontWeight: TYPOGRAPHY.fontWeight.regular,
      lineHeight: TYPOGRAPHY.lineHeight.normal,
      color: FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT,
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // 4px base unit
  shape: {
    borderRadius: parseInt(BORDER_RADIUS.md.replace('rem', ''), 10) * 16, // Convert rem to px
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
  shadows: [
    'none',
    SHADOWS.sm,
    SHADOWS.md,
    SHADOWS.md,
    SHADOWS.lg,
    SHADOWS.lg,
    SHADOWS.xl,
    SHADOWS.xl,
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
    SHADOWS['2xl'],
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS.md,
          textTransform: 'none',
          fontWeight: TYPOGRAPHY.fontWeight.medium,
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: TYPOGRAPHY.fontSize.sm,
        },
        sizeMedium: {
          padding: '8px 22px',
          fontSize: TYPOGRAPHY.fontSize.base,
        },
        sizeLarge: {
          padding: '10px 28px',
          fontSize: TYPOGRAPHY.fontSize.lg,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: BORDER_RADIUS.md,
            backgroundColor: FigmaColors.COLOR_WHITE,
            '&:hover': {
              backgroundColor: FigmaColors.COLOR_WHITE,
            },
            '&.Mui-focused': {
              backgroundColor: FigmaColors.COLOR_WHITE,
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E3E5E9',
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: FigmaColors.COLOR_PRIMARY400,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: TYPOGRAPHY.fontSize.base,
          color: FigmaColors.COLOR_TEXT_MAIN,
        },
        sizeSmall: {
          fontSize: TYPOGRAPHY.fontSize.sm,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: FigmaColors.COLOR_TEXT_MAIN_MEDIUM,
          '&.Mui-focused': {
            color: FigmaColors.COLOR_PRIMARY800,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM,
          fontSize: TYPOGRAPHY.fontSize.xs,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS.lg,
          boxShadow: SHADOWS.md,
          backgroundColor: FigmaColors.COLOR_WHITE,
          border: `1px solid ${FigmaColors.COLOR_PRIMARY50}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS.md,
          backgroundColor: FigmaColors.COLOR_WHITE,
        },
        elevation1: {
          boxShadow: SHADOWS.sm,
        },
        elevation2: {
          boxShadow: SHADOWS.md,
        },
        elevation3: {
          boxShadow: SHADOWS.lg,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: FigmaColors.COLOR_BACKGROUND,
        },
      },
    },
  },
};

// Create and export the theme
export const theme = createTheme(themeOptions);
