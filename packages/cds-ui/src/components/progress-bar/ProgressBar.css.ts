import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

const shine = keyframes({
  from: {
    left: '-100%',
    transitionProperty: 'left',
  },
  to: {
    left: '100%',
    transitionProperty: 'left',
  },
});

export const progressBarContainer = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
});

export const progressBar = style({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  backgroundColor: tokens.colors.neutral10,
  borderRadius: 'inherit',
  boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.25)',
});

export const progressBarTextContainer = style({
  width: '30px',
  marginInlineStart: tokens.space[12],
  fontFamily: tokens.fontFamily.body,
  fontSize: tokens.fontSize.small,
  lineHeight: tokens.lineHeight.xs,
  fontWeight: tokens.fontWeight[500],
  textTransform: 'uppercase',
  color: tokens.colors.neutral100,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

const progressBarVariants = {
  size: {
    sm: {
      top: '-3px',
      height: '5px',
      lineHeight: tokens.lineHeight.xs,
    },
    md: {
      top: '-5px',
      height: '10px',
      lineHeight: tokens.lineHeight.small,
    },
    lg: {
      top: '-8px',
      height: '15px',
      lineHeight: tokens.lineHeight.base,
    },
  },
  variant: {
    primary: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal70}`,
      backgroundColor: tokens.colors.teal50,
    },
    secondary: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral60}`,
      backgroundColor: tokens.colors.neutral40,
    },
    info: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.blue70}`,
      backgroundColor: tokens.colors.blue50,
    },
  },
};

export type ProgressBarVariants = VariantSelection<typeof progressBarVariants>;

export const stopAnimation = style({
  '::before': {
    animation: 'none',
    opacity: 0,
    transition: 'opacity 200ms ease-out',
  },
});

export const base = style({
  width: '0%',
  position: 'absolute',
  top: '-5px',
  left: 0,
  overflow: 'hidden',
  zIndex: 10,
  '::before': {
    content: '""',
    position: 'absolute',
    width: '50%',
    background: `linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4))`,
    animation: `${shine} 2s ease-in-out infinite`,
    height: '100%',
    zIndex: 1000,
    opacity: 1,
    transition: 'opacity 300ms ease-out',
  },
  selectors: {
    [`&${stopAnimation}::before`]: {
      animation: 'none',
      opacity: 0,
    },
  },
});

export const ProgressBarRecipe = recipe({
  base: [base],
  variants: progressBarVariants,
});
