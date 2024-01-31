import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

const sectionAlertVariants = {
  variant: {
    warning: {
      color: tokens.colors.neutral100,
      background: tokens.colors.yellow10,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.yellow50}`,
    },

    success: {
      color: tokens.colors.neutral100,
      background: tokens.colors.green10,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.green50}`,
    },

    info: {
      color: tokens.colors.neutral100,
      background: tokens.colors.blue10,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.blue50}`,
    },

    error: {
      color: tokens.colors.neutral100,
      background: tokens.colors.red10,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.red50}`,
    },
  },
};

export type SectionAlertVariants = VariantSelection<typeof sectionAlertVariants>;

/*************************************************************
					Section Alert Recipe for Base styles and Variants
**************************************************************/

export const baseSectionAlertStyle = style({
  display: 'flex',
  padding: tokens.space[8],
  fontFamily: tokens.fontFamily.base,
  fontWeight: tokens.fontWeight[400],
  borderRadius: tokens.borderRadius[4],
  marginBlockEnd: tokens.space[16],
});

export const sectionAlertMessage = style({
  display: 'inline',
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  fontWeight: tokens.fontWeight.body,
  color: tokens.colors.neutral100,
});

export const sectionAlertMessageLink = style({
  cursor: 'pointer',
  textDecoration: 'none',
  color: tokens.colors.blue50,
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  fontWeight: tokens.fontWeight.body,
  ':hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export const sectionAlertMessageHeader = style({
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  fontWeight: tokens.fontWeight[700],
  color: tokens.colors.neutral100,
});

export const sectionAlertAdditionalMessage = style({
  display: 'inline',
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  fontWeight: `${tokens.fontWeight.body} bold !important`,
  color: tokens.colors.neutral100,
});

export const sectionAlertIcon = style({
  display: 'inline',
  marginRight: '10px',
  height: '100%',
});

export const sectionAlertRecipe = recipe({
  base: baseSectionAlertStyle,
  variants: sectionAlertVariants,
});
