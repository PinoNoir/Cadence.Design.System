import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { colors } from './tokens.css';

export const space = {
  '0px': '0px',
  '2px': '2px',
  '4px': '4px',
  '8px': '8px',
  '12px': '12px',
  '14px': '14px',
  '16px': '16px',
  '20px': '20px',
  '24px': '24px',
  '32px': '32px',
  '40px': '40px',
  '48px': '48px',
  '56px': '56px',
  '64px': '64px',
  '72px': '72px',
  '80px': '80px',
  '88px': '88px',
  '96px': '96px',
  '128px': '128px',
  '144px': '144px',
  '160px': '160px',
};

export const gap = {
  '16px': '16px',
  '24px': '24px',
  '32px': '32px',
  '40px': '40px',
};

export const widths = {
  '0px': '0px',
  '8px': '8px',
  '16px': '16px',
  '32px': '32px',
  '40px': '40px',
  '64px': '64px',
  '128px': '128px',
  '1Col': `${(1 / 12) * 100}%`,
  '2Col': `${(2 / 12) * 100}%`,
  '3Col': `${(3 / 12) * 100}%`,
  '4Col': `${(4 / 12) * 100}%`,
  '5Col': `${(5 / 12) * 100}%`,
  '6Col': `${(6 / 12) * 100}%`,
  '7Col': `${(7 / 12) * 100}%`,
  '8Col': `${(8 / 12) * 100}%`,
  '9Col': `${(9 / 12) * 100}%`,
  '10Col': `${(10 / 12) * 100}%`,
  '11Col': `${(11 / 12) * 100}%`,
  '12Col': '100%',
  full: '100%',
  auto: 'auto',
  'fit-content': 'fit-content',
  'min-content': 'min-content',
  'max-content': 'max-content',
};

export const heights = {
  '16px': '16px',
  '32px': '32px',
  '64px': '64px',
  '128px': '128px',
  '256px': '256px',
  auto: 'auto',
};

export const basis = {
  '0': 0,
  '1': `${(1 / 12) * 100}%`,
  '2': `${(2 / 12) * 100}%`,
  '3': `${(3 / 12) * 100}%`,
  '4': `${(4 / 12) * 100}%`,
  '5': `${(5 / 12) * 100}%`,
  '6': `${(6 / 12) * 100}%`,
  '7': `${(7 / 12) * 100}%`,
  '8': `${(8 / 12) * 100}%`,
  '9': `${(9 / 12) * 100}%`,
  '10': `${(10 / 12) * 100}%`,
  '11': `${(11 / 12) * 100}%`,
  '12': '100%',
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

export const borderRadius = {
  square: '0',
  '1': '1px',
  '2': '2px',
  '3': '3px',
  '4': '4px',
  '5': '5px',
  '10': '10px',
  '15': '15px',
  '20': '20px',
  round: '1e5px',
};

export const breakpoints = {
  mobile: 'screen and (min-width: 512px)',
  tablet: 'screen and (min-width: 768px)',
  laptop: 'screen and (min-width: 992px)',
  desktop: 'screen and (min-width: 1200px)',
};

const conditions = {
  mobile: {},
  tablet: { '@media': breakpoints.tablet },
  laptop: { '@media': breakpoints.laptop },
  desktop: { '@media': breakpoints.desktop },
};

const atomicStyles = defineProperties({
  conditions: {
    ...conditions,
  },
  defaultCondition: 'mobile',
  properties: {
    color: colors,
    backgroundColor: colors,
    background: colors,
    borderColor: colors,
    borderRadius: borderRadius,
    border: space,
    boxShadow: boxShadow,
    boxSizing: ['border-box'],
    height: heights,
    maxHeight: ['100%', '100vh'],
    width: widths,
    maxWidth: widths,
    gap: gap,
    rowGap: gap,
    flexBasis: basis,
    flexWrap: ['wrap', 'nowrap'],
    objectFit: ['contain'],
    display: ['none', 'grid', 'flex', 'block', 'inline-block', 'inline', 'inline-flex'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    placeItems: ['center', 'stretch', 'start', 'normal', 'end'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    flexShrink: [1],
    flexGrow: [1],
    textAlign: ['left', 'right', 'center', 'justify'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    gridColumn: ['auto', 'span 2 / span 2', 'span 1 / span 3', 'span 1 / span 4'],
    position: ['absolute', 'relative', 'fixed'],
    justifyItems: ['stretch', 'start', 'center', 'end'],
    padding: space,
    paddingInline: space,
    paddingBlock: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    margin: space,
    marginInline: space,
    marginBlock: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    w: ['width'],
    h: ['height'],
    bg: ['backgroundColor'],
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});

export const atoms = createSprinkles(atomicStyles);

// It's a good idea to export the Sprinkles type too
export type Atoms = Parameters<typeof atoms>[0];
