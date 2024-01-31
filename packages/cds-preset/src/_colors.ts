import { defineTokens } from '@pandacss/dev';

export const colors = defineTokens.colors({
  transparent: { value: 'transparent' },
  current: { value: 'current-color' },
  slate: { value: '#173237' }, // Stretto's primary brand color used in the logo and customer facing websites
  orange: { value: '#FD7250' }, // Stretto's secondary brand accent color used in the logo and customer facing websites
  gray: { value: '#f5f6fa' },
  white: { value: '#fff' },
  black: { value: '#000' },

  neutral: {
    100: { value: '#173237' }, // Stretto's primary brand color used in the logo and customer facing websites
    90: { value: '#2e474b' },
    80: { value: '#455b5f' },
    70: { value: '#5d7073' },
    60: { value: '#748487' },
    50: { value: '#8b999b' },
    40: { value: '#a2adaf' },
    30: { value: '#b9c2c3' },
    20: { value: '#d1d6d7' },
    10: { value: '#e8ebeb' },
  },

  red: {
    100: { value: '#71121d' },
    90: { value: '#871522' },
    80: { value: '#9e1928' },
    70: { value: '#b41c2e' },
    60: { value: '#cb2033' },
    50: { value: '#e12339' }, // BCC Error  accent color used for error buttons and error messaging
    40: { value: '#ea6574' },
    30: { value: '#ed7b88' },
    20: { value: '#f6bdc4' },
    10: { value: '#fce9eb' }, // Background color used for error alert components.
  },

  blue: {
    100: { value: '#153d5c' },
    90: { value: '#19496e' },
    80: { value: '#1d5580' },
    70: { value: '#226292' },
    60: { value: '#266ea5' },
    50: { value: '#2a7ab7' }, // BCC Skydiver  accent color used for tertiary buttons and text links
    40: { value: '#6aa2cd' },
    30: { value: '#7fafd4' },
    20: { value: '#bfd7e9' },
    10: { value: '#eaf2f8' }, // Background color used for info alert components.
  },

  teal: {
    100: { value: '#014e4c' },
    90: { value: '#015d5b' },
    80: { value: '#016d6a' },
    70: { value: '#027c79' },
    60: { value: '#028c88' }, // BCC Celeste  primary color used for buttons, sidenav links and icons.
    50: { value: '#029b97' },
    40: { value: '#4eb9b6' },
    30: { value: '#67c3c1' },
    20: { value: '#b3e1e0' },
    10: { value: '#e6f5f5' },
  },

  green: {
    100: { value: '#083a1c' },
    90: { value: '#0a4c25' },
    80: { value: '#0d5e2d' },
    70: { value: '#11793a' },
    60: { value: '#128741' },
    50: { value: '#16a550' }, // BCC Success  accent color used for success states and messaging
    40: { value: '#45c97a' },
    30: { value: '#88ddaa' },
    20: { value: '#b0e8c6' },
    10: { value: '#d7f4e3' }, // Background color used for success alert components.
  },

  yellow: {
    100: { value: '#765510' },
    90: { value: '#8d6613' }, // BCC Warning  accent color used for warning message text
    80: { value: '#a57716' },
    70: { value: '#bc881a' },
    60: { value: '#d4991d' },
    50: { value: '#ebaa20' }, // BCC Notifications  accent color used for pill/badge notifications
    40: { value: '#f1c463' },
    30: { value: '#f3cc79' },
    20: { value: '#f9e6bc' },
    10: { value: '#fdf7e9' }, // Background color used for warning alert components.
  },

  purple: {
    100: { value: '#301533' },
    90: { value: '#3a193d' },
    80: { value: '#431d47' },
    70: { value: '#4d2152' },
    60: { value: '#56255c' },
    50: { value: '#602966' }, // BCC Wonka  accent color used on the top border color for CNC modals and help content
    40: { value: '#906994' },
    30: { value: '#a07fa3' },
    20: { value: '#cfbfd1' },
    10: { value: '#efeaf0' },
  },

  magenta: {
    100: { value: '#43092d' },
    90: { value: '#5a0c3c' },
    80: { value: '#700f4b' },
    70: { value: '#87125a' },
    60: { value: '#9d1569' },
    50: { value: '#b21876' }, // BCC 80's Hair  accent color used for in app user guides and help content
    40: { value: '#dd54a8' },
    30: { value: '#e582bf' },
    20: { value: '#f5a9d8' },
    10: { value: '#f7d4ea' },
  },
});
