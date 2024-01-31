import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { pxToRem } from '../../utilities/style-utils';
import { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

/******************************************************************
					Search Input Variants
*******************************************************************/

const searchInputVariants = {
  variant: {
    default: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
      color: tokens.colors.neutral100,
      backgroundColor: tokens.colors.white,
      ':focus': {
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
        outline: '2px solid transparent',
        boxShadow: `0px 0px 0px 2px ${tokens.colors.teal20}, 0px 0px 0px 2px ${tokens.colors.teal20}`,
      },
      '::placeholder': {
        display: `block !important`,
        color: tokens.colors.neutral60,
      },
    },
    warning: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.yellow70}`,
      color: tokens.colors.yellow70,
      backgroundColor: tokens.colors.white,
      ':focus': {
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.yellow70}`,
        outline: '2px solid transparent',
        boxShadow: `0px 0px 0px 2px ${tokens.colors.yellow20}, 0px 0px 0px 2px ${tokens.colors.yellow20}`,
      },
      '::placeholder': {
        color: tokens.colors.yellow70,
      },
    },
    valid: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.green50}`,
      color: tokens.colors.green50,
      backgroundColor: tokens.colors.white,
      ':focus': {
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.green50}`,
        outline: '2px solid transparent',
        boxShadow: `0px 0px 0px 2px ${tokens.colors.green20}, 0px 0px 0px 2px ${tokens.colors.green20}`,
      },
      '::placeholder': {
        color: tokens.colors.green50,
      },
    },
    invalid: {
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.red50}`,
      color: tokens.colors.red50,
      backgroundColor: tokens.colors.white,
      ':focus': {
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.red50}`,
        outline: '2px solid transparent',
        boxShadow: `0px 0px 0px 2px ${tokens.colors.red20}, 0px 0px 0px 2px ${tokens.colors.red20}`,
      },
      '::placeholder': {
        color: tokens.colors.red50,
      },
    },
  },
  borderRadius: {
    default: {
      borderRadius: 'none',
    },
    rounded: {
      borderRadius: tokens.borderRadius[4],
    },
  },
};

export type SearchInputVariants = VariantSelection<typeof searchInputVariants>;

/******************************************************************
					search Input Base Style & Recipe
*******************************************************************/

export const searchInput = style({
  boxSizing: 'border-box',
  order: '1',
  width: '100%',
  height: pxToRem(32),
  paddingInline: pxToRem(40),
  appearance: 'none',
  textOverflow: 'ellipsis',
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral60}`,
  transition: `border-color 150ms ease-in-out, box-shadow 150ms ease-in-out`,
  ':focus': {
    border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
    outline: '2px solid transparent',
    boxShadow: `0px 0px 0px 2px ${tokens.colors.teal20}, 0px 0px 0px 2px ${tokens.colors.teal20}`,
  },
  '::placeholder': {
    color: tokens.colors.neutral60,
  },
  ':disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    opacity: '50%',
    backgroundColor: tokens.colors.neutral30,
  },
  ':read-only': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
});

export const searchInputRecipe = recipe({
  base: searchInput,
  variants: searchInputVariants,
});

/******************************************************************
					Search Elements
*******************************************************************/

export const search = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
});

export const searchDisabled = style({
  pointerEvents: 'none',
  cursor: 'not-allowed',
  opacity: '50%',
  backgroundColor: tokens.colors.neutral30,
});

export const searchMagnifier = style({
  padding: 0,
  margin: 0,
  border: 0,
  font: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
});

globalStyle(`${searchMagnifier} svg`, {
  boxSizing: 'border-box',
  padding: '0',
  border: '0',
  margin: '0',
  fontFamily: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
  position: 'absolute',
  zIndex: '2',
  top: '50%',
  left: '1rem',
  width: '20px',
  height: '20px',
  fill: 'currentcolor',
  pointerEvents: 'none',
  WebkitTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)',
});

/******************************************************************
					Label
*******************************************************************/

export const searchLabel = style({
  position: 'absolute',
  overflow: 'hidden',
  width: '1px',
  height: '1px',
  padding: '0',
  border: '0',
  margin: '-1px',
  clip: 'rect(0,0,0,0)',
  visibility: 'inherit',
  whiteSpace: 'nowrap',
});

/******************************************************************
					Close Button Styles
*******************************************************************/

export const searchButton = style({
  flexShrink: '0',
  marginLeft: tokens.space[8],
  backgroundColor: tokens.colors.white,
  border: 'none',
});

export const searchClose = style({
  boxSizing: 'border-box',
  padding: '0',
  border: '0',
  margin: '0',
  fontFamily: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
  display: 'inline-block',
  WebkitAppearance: 'none',
  appearance: 'none',
  background: 'none',
  cursor: 'pointer',
  textAlign: 'start',
  outline: '2px solid rgba(0,0,0,0)',
  outlineOffset: '-2px',
  position: 'absolute',
  top: '0',
  right: '0',
  height: '31px',
  width: '31px',
});

globalStyle(`${searchClose} svg`, {
  fill: 'currentColor',
  verticalAlign: 'middle',
  width: '1rem',
  height: '1rem',
});

export const searchCloseHidden = style({
  opacity: 0,
  visibility: 'hidden',
});
