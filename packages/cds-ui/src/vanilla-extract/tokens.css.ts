export const animation = {
  default: '400ms ease-in',
  fast: '300ms ease-in',
};

export const breakpoints = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1440px',
};

type MEDIA_QUERIES = Record<keyof typeof breakpoints, Record<string, string>>;

// Generates media queries formatted for Vanilla Extract
export const MediaQueries: MEDIA_QUERIES = Object.entries(breakpoints).reduce(
  (mergeObj, [key, value]) => ({
    ...mergeObj,
    [key]: { '@media': `screen and (min-width: ${value})` },
  }),
  {} as MEDIA_QUERIES,
);

export type COLORS = Record<keyof typeof colors, Record<string, string>>;

export const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  slate: '#173237', // Stretto's primary brand color used in the logo and customer facing websites
  orange: '#FD7250', // Stretto's secondary brand accent color used in the logo and customer facing websites
  gray: '#f5f6fa',
  white: '#fff',
  black: '#000',

  neutral100: '#173237', // Stretto's primary brand color used in the logo and customer facing websites
  neutral90: '#2e474b',
  neutral80: '#455b5f',
  neutral70: '#5d7073',
  neutral60: '#748487',
  neutral50: '#8b999b',
  neutral40: '#a2adaf',
  neutral30: '#b9c2c3',
  neutral20: '#d1d6d7',
  neutral10: '#e8ebeb',

  red100: '#71121d',
  red90: '#871522',
  red80: '#9e1928',
  red70: '#b41c2e',
  red60: '#cb2033',
  red50: '#e12339', // BCC Error  accent color used for error buttons and error messaging
  red40: '#ea6574',
  red30: '#ed7b88',
  red20: '#f6bdc4',
  red10: '#fce9eb', // Background color used for error alert components.

  blue100: '#153d5c',
  blue90: '#19496e',
  blue80: '#1d5580',
  blue70: '#226292',
  blue60: '#266ea5',
  blue50: '#2a7ab7', // BCC Skydiver  accent color used for tertiary buttons and text links
  blue40: '#6aa2cd',
  blue30: '#7fafd4',
  blue20: '#bfd7e9',
  blue10: '#eaf2f8', // Background color used for info alert components.

  teal100: '#014e4c',
  teal90: '#015d5b',
  teal80: '#016d6a',
  teal70: '#027c79',
  teal60: '#028c88', // BCC Celeste  primary color used for buttons, sidenav links and icons.
  teal50: '#029b97',
  teal40: '#4eb9b6',
  teal30: '#67c3c1',
  teal20: '#b3e1e0',
  teal10: '#e6f5f5',

  green100: '#083a1c',
  green90: '#0a4c25',
  green80: '#0d5e2d',
  green70: '#11793a',
  green60: '#128741',
  green50: '#16a550', // BCC Success  accent color used for success states and messaging
  green40: '#45c97a',
  green30: '#88ddaa',
  green20: '#b0e8c6',
  green10: '#d7f4e3', // Background color used for success alert components.

  yellow100: '#765510',
  yellow90: '#8d6613', // BCC Warning  accent color used for warning message text
  yellow80: '#a57716',
  yellow70: '#bc881a',
  yellow60: '#d4991d',
  yellow50: '#ebaa20', // BCC Notifications  accent color used for pill/badge notifications
  yellow40: '#f1c463',
  yellow30: '#f3cc79',
  yellow20: '#f9e6bc',
  yellow10: '#fdf7e9', // Background color used for warning alert components.

  purple100: '#301533',
  purple90: '#3a193d',
  purple80: '#431d47',
  purple70: '#4d2152',
  purple60: '#56255c',
  purple50: '#602966', // BCC Wonka  accent color used on the top border color for CNC modals and help content
  purple40: '#906994',
  purple30: '#a07fa3',
  purple20: '#cfbfd1',
  purple10: '#efeaf0',

  magenta100: '#43092d',
  magenta90: '#5a0c3c',
  magenta80: '#700f4b',
  magenta70: '#87125a',
  magenta60: '#9d1569',
  magenta50: '#b21876', // BCC 80's Hair  accent color used for in app user guides and help content
  magenta40: '#dd54a8',
  magenta30: '#e582bf',
  magenta20: '#f5a9d8',
  magenta10: '#f7d4ea',
};

export const opacity = {
  90: 0.9,
  80: 0.8,
  70: 0.7,
  60: 0.6,
  50: 0.5,
  40: 0.4,
  30: 0.3,
  20: 0.2,
  10: 0.1,
};

export const boxShadow = {
  transition: `box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1)`,
  none: `0 0 #0000`,
  xs: `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`,
  small: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
  medium: `0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)`,
  lg: `0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)`,
  xl: `0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)`,
};

export const focus = {
  default: {
    outline: '2px solid transparent',
    boxShadow: `0 0 0 3px rgba(2, 140, 136, 0.4)`,
  },
};

export const space = {
  0: '0px',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  56: '56px',
  64: '64px',
  72: '72px',
  80: '80px',
  88: '88px',
  96: '96px',
  104: '104px',
};

export const size = {
  0: '0',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
};

export const zIndex = {
  toast: '9000',
  modal: '8000',
  mask: '6000',
  navbar: '6000',
  menu: '2000',
  header: '1000',
  dataGrid: '999',
  content: '0',
};

export const borderWidth = {
  0: '0',
  '.5': '.5px',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px',
};

export const borderRadius = {
  square: '0',
  1: '1px',
  2: '2px',
  3: '3px',
  4: '4px',
  5: '5px',
  10: '10px',
  15: '15px',
  20: '20px',
  round: '1e5px',
};

export const fontFamily = {
  base: 'Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  body: 'Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  headings: 'Roboto, Helvetica, Arial, sans-serif',
  code: 'Roboto Mono, sans-serif',
};

export const fontSize = {
  body: '0.875rem', // 14px - used for h5, body, paragraph, and field label text
  xs: '0.625rem', // 10px - used for popover and tooltip components
  small: '0.75rem', // 12px - used for badges and chip components
  medium: '1rem', // 16px
  large: '1.25rem', // 20px
  xl: '1.5rem', // 24px
  xxl: '2rem', // 32px
  xxxl: '2.5rem', // 40px
  h1: '2rem', // h1 size
  h2: '1.5rem', // h2 size
  h3: '1.25rem', // h3 size
  h4: '1rem', // h4 size
  h5: '0.875rem', // h5 size
  h6: '0.75rem', // h6 size
};

export const fontWeight = {
  body: '400',
  headings: '300',
  300: '300',
  400: '400',
  500: '500',
  700: '700',
};

export const lineHeight = {
  xs: '1',
  small: '1.25',
  base: '1.5',
  headings: '1.75',
};

export const tokens = {
  animation,
  breakpoints,
  MediaQueries,
  colors,
  opacity,
  space,
  size,
  boxShadow,
  borderRadius,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  zIndex,
};
