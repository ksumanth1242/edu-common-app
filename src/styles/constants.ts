// Design System Constants for Material UI Components

// Figma Colors Definition
export const FigmaColors = {
  // Figma Base colors
  COLOR_WHITE: '#FFFFFF',
  COLOR_BLACK: '#000000',

  // Figma Background colors
  COLOR_BACKGROUND: '#F9FAFB',

  // Figma Primary colors - Updated to match the blue gradient
  COLOR_PRIMARY800: '#2563eb', // Start of gradient
  COLOR_PRIMARY700: '#3056e3',
  COLOR_PRIMARY600: '#3b51e0',
  COLOR_PRIMARY500: '#4546dc',
  COLOR_PRIMARY400: '#4f46e5', // End of gradient
  COLOR_PRIMARY300: '#6c63e8',
  COLOR_PRIMARY200: '#8e87ed',
  COLOR_PRIMARY100: '#d4d1f9',
  COLOR_PRIMARY50: '#eae9fd',

  // Accent Colors
  COLOR_ACCENT_BLUE: '#1AAEFA',
  COLOR_ACCENT_LIGHT_BLUE: '#E6F6FE',
  COLOR_ACCENT_ORANGE: '#FE5B32',
  COLOR_ACCENT_LIGHT_ORANGE: '#FFE0D8',
  COLOR_ACCENT_PINK: '#FF81CC',
  COLOR_ACCENT_LIGHT_PINK: '#FFE7F5',

  // Soft Colors - New section
  COLOR_SOFT_GREEN: '#22C35D',
  COLOR_SOFT_BLUE: '#e0ecfe',
  COLOR_SOFT_RED: '#fee6e6',
  COLOR_SOFT_YELLOW: '#fff5cf',

  // Text Colors
  COLOR_TEXT_MAIN: '#201F23',
  COLOR_TEXT_MAIN_MEDIUM: '#44414B',
  COLOR_TEXT_MAIN_LIGHT: '#4E4C58',

  COLOR_BODY_TEXT_MAIN: '#605D6C',
  COLOR_BODY_TEXT_MAIN_MEDIUM: '#757384',
  COLOR_BODY_TEXT_MAIN_LIGHT: '#93919F',
  COLOR_APP_TEXT_MAIN: '#4B5563',

  // Gradient color definitions
  COLOR_GRADIENT_BLUE_START: '#2563eb',
  COLOR_GRADIENT_BLUE_END: '#4f46e5',
} as const;

// App Colors - Semantic color aliases
export const whiteColor = FigmaColors.COLOR_WHITE;
export const blackColor = FigmaColors.COLOR_BLACK;

export const appBackgroundColor = FigmaColors.COLOR_BACKGROUND;
export const appFontColor = FigmaColors.COLOR_TEXT_MAIN;

export const textColor = FigmaColors.COLOR_TEXT_MAIN;
export const textColorMedium = FigmaColors.COLOR_TEXT_MAIN_MEDIUM;
export const textColorLight = FigmaColors.COLOR_TEXT_MAIN_LIGHT;

export const primaryColor = FigmaColors.COLOR_PRIMARY800;
export const primaryHoverColor = '#1d4ed8';
export const primaryActiveColor = '#1e40af';

export const gradientBlueStart = FigmaColors.COLOR_GRADIENT_BLUE_START;
export const gradientBlueEnd = FigmaColors.COLOR_GRADIENT_BLUE_END;

export const secondaryColor = '#FDDA3B';
export const secondaryHoverColor = '#FDE162';
export const secondaryActiveColor = '#E6C636';

export const primaryLightColor = 'hsl(var(--brand-primary-light))';
export const primaryLightHoverColor = 'hsla(var(--brand-primary), 0.12)';
export const primaryLightActiveColor = '#F6F2FF';

export const softGreenColor = FigmaColors.COLOR_SOFT_GREEN;
export const softBlueColor = FigmaColors.COLOR_SOFT_BLUE;
export const softRedColor = FigmaColors.COLOR_SOFT_RED;
export const softYellowColor = FigmaColors.COLOR_SOFT_YELLOW;

export const inputBackgroundColor = '#FAFBFC';
export const inputBackgroundHoverColor = '#EBECF0';
export const inputBorderColor = '#E3E5E9';
export const menuItemColor = '#544C63';
export const menuISubtemColor = '#898199';
export const appTextColor = FigmaColors.COLOR_APP_TEXT_MAIN;

// Material UI Colors (keeping existing structure for compatibility)
export const COLORS = {
  primary: {
    main: FigmaColors.COLOR_PRIMARY800,
    light: FigmaColors.COLOR_PRIMARY300,
    dark: FigmaColors.COLOR_PRIMARY700,
    contrastText: FigmaColors.COLOR_WHITE,
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#ffffff',
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#ffffff',
  },
  info: {
    main: FigmaColors.COLOR_ACCENT_BLUE,
    light: FigmaColors.COLOR_ACCENT_LIGHT_BLUE,
    dark: '#01579b',
    contrastText: '#ffffff',
  },
  success: {
    main: FigmaColors.COLOR_SOFT_GREEN,
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  // Extended Figma Colors
  figma: {
    background: FigmaColors.COLOR_BACKGROUND,
    textMain: FigmaColors.COLOR_TEXT_MAIN,
    textMedium: FigmaColors.COLOR_TEXT_MAIN_MEDIUM,
    textLight: FigmaColors.COLOR_TEXT_MAIN_LIGHT,
    bodyTextMain: FigmaColors.COLOR_BODY_TEXT_MAIN,
    bodyTextMedium: FigmaColors.COLOR_BODY_TEXT_MAIN_MEDIUM,
    bodyTextLight: FigmaColors.COLOR_BODY_TEXT_MAIN_LIGHT,
    accent: {
      blue: FigmaColors.COLOR_ACCENT_BLUE,
      lightBlue: FigmaColors.COLOR_ACCENT_LIGHT_BLUE,
      orange: FigmaColors.COLOR_ACCENT_ORANGE,
      lightOrange: FigmaColors.COLOR_ACCENT_LIGHT_ORANGE,
      pink: FigmaColors.COLOR_ACCENT_PINK,
      lightPink: FigmaColors.COLOR_ACCENT_LIGHT_PINK,
    },
    soft: {
      green: FigmaColors.COLOR_SOFT_GREEN,
      blue: FigmaColors.COLOR_SOFT_BLUE,
      red: FigmaColors.COLOR_SOFT_RED,
      yellow: FigmaColors.COLOR_SOFT_YELLOW,
    },
    gradient: {
      blueStart: FigmaColors.COLOR_GRADIENT_BLUE_START,
      blueEnd: FigmaColors.COLOR_GRADIENT_BLUE_END,
    },
  },
} as const;

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    primary: '"Roboto", "Helvetica", "Arial", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// Spacing
export const SPACING = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
  '5xl': '8rem', // 128px
} as const;

// Border Radius
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem', // 2px
  md: '0.25rem', // 4px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Shadows
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
} as const;

// Breakpoints (Material UI standard)
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;

// Component Sizes
export const COMPONENT_SIZES = {
  button: {
    small: {
      height: '32px',
      padding: '6px 16px',
      fontSize: TYPOGRAPHY.fontSize.sm,
    },
    medium: {
      height: '40px',
      padding: '8px 22px',
      fontSize: TYPOGRAPHY.fontSize.base,
    },
    large: {
      height: '48px',
      padding: '10px 28px',
      fontSize: TYPOGRAPHY.fontSize.lg,
    },
  },
  textField: {
    small: {
      height: '40px',
      fontSize: TYPOGRAPHY.fontSize.sm,
    },
    medium: {
      height: '48px',
      fontSize: TYPOGRAPHY.fontSize.base,
    },
    large: {
      height: '56px',
      fontSize: TYPOGRAPHY.fontSize.lg,
    },
  },
} as const;

// Animation Durations
export const ANIMATIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Z-Index Layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;
