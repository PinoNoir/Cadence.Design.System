import { defineTokens } from '@pandacss/dev';
import { colors } from './_colors';

export const tokens = defineTokens({
  ...colors,
  opacity: {
    90: { value: 0.9 },
    80: { value: 0.8 },
    70: { value: 0.7 },
    60: { value: 0.6 },
    50: { value: 0.5 },
    40: { value: 0.4 },
    30: { value: 0.3 },
    20: { value: 0.2 },
    10: { value: 0.1 },
  },
  spacing: {
    4: { value: '4px' },
    8: { value: '8px' },
    16: { value: '16px' },
    24: { value: '24px' },
    32: { value: '32px' },
    40: { value: '40px' },
    48: { value: '48px' },
    gutter: { value: '32px' },
  },
  sizes: {
    4: { value: '4px' },
    8: { value: '8px' },
    16: { value: '16px' },
    24: { value: '24px' },
    32: { value: '32px' },
    40: { value: '40px' },
    48: { value: '48px' },
    56: { value: '56px' },
    64: { value: '64px' },
    72: { value: '72px' },
    80: { value: '80px' },
    88: { value: '88px' },
    96: { value: '96px' },
    104: { value: '104px' },
  },
  fonts: {
    body: {
      value: 'Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    headings: { value: 'Roboto, Helvetica, Arial, sans-serif' },
    monospace: { value: 'Roboto Mono, sans-serif' },
  },
  fontSizes: {
    body: { value: '0.875rem' }, // 14px - used for h5, body, paragraph, and field label text
    xs: { value: '0.625rem' }, // 10px - used for popover and tooltip components
    small: { value: '0.75rem' }, // 12px - used for badges and chip components
    h1: { value: '2rem' }, // h1 size
    h2: { value: '1.5rem' }, // h2 size
    h3: { value: '1.25rem' }, // h3 size
    h4: { value: '1rem' }, // h4 size
    h5: { value: '0.875rem' }, // h5 size
    h6: { value: '0.75rem' }, // h6 size
  },
  fontWeights: {
    headings: { value: '300' },
    body: { value: '400' },
    300: { value: '300' },
    400: { value: '400' },
    500: { value: '500' },
    700: { value: '700' },
  },
  lineHeights: {
    xs: { value: '1' },
    small: { value: '1.25' },
    base: { value: '1.5' },
    headings: { value: '1.75' },
  },
  radii: {
    square: { value: '0' },
    1: { value: '1px' },
    2: { value: '2px' },
    3: { value: '3px' },
    4: { value: '4px' },
    5: { value: '5px' },
    10: { value: '10px' },
    15: { value: '15px' },
    20: { value: '20px' },
    round: { value: '1e5px' },
  },
  borders: {
    panel: { value: '1px solid {colors.neutral.20}' },
    dark: { value: '1px solid {colors.neutral.100}' },
    primary: { value: '1px solid {colors.teal.50}' },
    secondary: { value: '1px solid {colors.neutral.40}' },
    tertiary: { value: '1px solid {colors.blue.50}' },
    info: { value: '1px solid {colors.blue.50}' },
    help: { value: '1px solid {colors.magenta.50}' },
    warning: { value: '1px solid {colors.yellow.70}' },
    success: { value: '1px solid {colors.green.50}' },
    error: { value: '1px solid {colors.red.50}' },
    accent: { value: '1px solid {colors.purple.50}' },
  },
  shadows: {
    none: { value: '0 0 #0000' },
    1: {
      value: ['0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)'],
    },
    2: {
      value: ['0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'],
    },
    3: {
      value: ['0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)'],
    },
    4: {
      value: [
        '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
      ],
    },
    5: {
      value: [
        '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
      ],
    },
  },
  zIndex: {
    toast: { value: 9000 },
    modal: { value: 8000 },
    mask: { value: 6000 },
    navbar: { value: 6000 },
    menu: { value: 2000 },
    header: { value: 1000 },
    dataGrid: { value: 999 },
    content: { value: 0 },
  },
  durations: {
    fast: { value: '100ms' },
    default: { value: '300ms' },
    slow: { value: '500ms' },
  },
  animations: {
    spin: {
      value: 'spin 1s linear infinite',
    },
  },
});
