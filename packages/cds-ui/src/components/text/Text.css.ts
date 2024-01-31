import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

// This is an example of how we can use `styleVariants`
// create a collection of styles that map to a prop value.
export const textVariants = {
  size: {
    xs: {
      fontSize: tokens.fontSize.xs,
      lineHeight: tokens.lineHeight.xs,
    },
    small: {
      fontSize: tokens.fontSize.small,
      lineHeight: tokens.lineHeight.base,
    },
    base: {
      fontSize: tokens.fontSize.body,
      lineHeight: tokens.lineHeight.base,
    },
    medium: {
      fontSize: tokens.fontSize.medium,
      lineHeight: tokens.lineHeight.base,
    },
    large: {
      fontSize: tokens.fontSize.large,
      lineHeight: tokens.lineHeight.headings,
    },
    xl: {
      fontSize: tokens.fontSize.xl,
      lineHeight: tokens.lineHeight.headings,
    },
    h1: {
      fontSize: tokens.fontSize.h1,
      lineHeight: tokens.lineHeight.headings,
      fontWeight: tokens.fontWeight.headings,
    },
    h2: {
      fontSize: tokens.fontSize.h2,
      lineHeight: tokens.lineHeight.headings,
      fontWeight: tokens.fontWeight.headings,
    },
    h3: {
      fontSize: tokens.fontSize.h3,
      lineHeight: tokens.lineHeight.headings,
      fontWeight: tokens.fontWeight.headings,
    },
    h4: {
      fontSize: tokens.fontSize.h4,
      lineHeight: tokens.lineHeight.headings,
    },
    h5: {
      fontSize: tokens.fontSize.h5,
      lineHeight: tokens.lineHeight.headings,
    },
    h6: {
      fontSize: tokens.fontSize.h6,
      lineHeight: tokens.lineHeight.headings,
    },
    a: {
      fontSize: tokens.fontSize.body,
      lineHeight: tokens.lineHeight.base,
      cursor: 'pointer',
    },
  },
  color: {
    default: { color: tokens.colors.neutral100 },
    primary: { color: tokens.colors.teal50 },
    secondary: { color: tokens.colors.neutral40 },
    tertiary: { color: tokens.colors.blue50 },
    accent: { color: tokens.colors.magenta50 },
    help: { color: tokens.colors.purple50 },
    info: { color: tokens.colors.blue50 },
    success: { color: tokens.colors.green50 },
    warning: { color: tokens.colors.yellow70 },
    error: { color: tokens.colors.red50 },
  },
};

export type TextVariants = VariantSelection<typeof textVariants>;

export const textRecipe = recipe({
  base: [
    {
      fontFamily: tokens.fontFamily.base,
      lineHeight: tokens.lineHeight.base,
    },
  ],
  variants: textVariants,
});
