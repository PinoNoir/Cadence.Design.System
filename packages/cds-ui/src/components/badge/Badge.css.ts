import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { pxToRem } from '../../utilities/style-utils';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

const badgeVariants = {
  shape: {
    square: {
      borderRadius: tokens.borderRadius.square,
    },
    bevel: {
      borderRadius: tokens.borderRadius[4],
    },
    round: {
      borderRadius: tokens.borderRadius.round,
    },
  },
  variant: {
    default: {
      color: tokens.colors.white,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral90}`,
      backgroundColor: tokens.colors.neutral70,
    },
    info: {
      color: tokens.colors.white,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.blue70}`,
      backgroundColor: tokens.colors.blue50,
    },
    success: {
      color: tokens.colors.white,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.green70}`,
      backgroundColor: tokens.colors.green50,
    },
    warning: {
      color: tokens.colors.neutral100,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.yellow70}`,
      backgroundColor: tokens.colors.yellow50,
    },
    error: {
      color: tokens.colors.white,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.red70}`,
      backgroundColor: tokens.colors.red50,
    },
  },
};

export type BadgeVariants = VariantSelection<typeof badgeVariants>;

export const BadgeRecipe = recipe({
  base: [
    {
      WebkitFontSmoothing: 'antialiased',
      fontSize: tokens.fontSize.small,
      fontFamily: tokens.fontFamily.base,
      lineHeight: tokens.lineHeight.base,
      fontWeight: tokens.fontWeight[400],
      paddingInline: pxToRem(10.4),
      paddingBlock: pxToRem(2),
      boxSizing: 'border-box',
    },
  ],
  variants: badgeVariants,
  defaultVariants: {
    shape: 'square',
    variant: 'info',
  },
});

export const iconContainer = style({
  fontSize: '20px',
  position: 'relative',
  paddingLeft: 4,
  top: '1px',
});
