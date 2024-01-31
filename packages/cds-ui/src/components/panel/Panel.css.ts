import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

export const panelHeader = style({
  fontFamily: tokens.fontFamily.body,
  marginLeft: '32px',
  marginRight: '32px',
  marginTop: '32px',
});

export const panelHeaderText = style({
  fontFamily: tokens.fontFamily.body,
  fontWeight: '300',
  fontSize: '25px',
  wordWrap: 'break-word',
  alignSelf: 'self-start',
});

export const panelHeaderIcon = style({
  display: 'inline-flex',
  alignItems: 'center',
  marginInlineStart: tokens.space[8],
});

globalStyle(`${panelHeaderIcon} svg`, {
  fontSize: '1.5em',
});

export const panelContent = style({
  margin: '8px 32px 32px 32px',
});

export const panelFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '2rem',
});

const panelVariants = {
  border: {
    default: {
      borderTop: `${tokens.borderWidth[4]} solid ${tokens.colors.neutral100}`,
    },
    blank: {
      borderTop: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
    },
  },
};

export type PanelVariants = VariantSelection<typeof panelVariants>;

/********************************************************************************************
					Panel Recipe for Base styles and Variants
*********************************************************************************************/

export const basePanelStyle = style({
  fontFamily: tokens.fontFamily.body,
  boxSizing: 'border-box',
  backgroundColor: tokens.colors.white,
  borderLeft: `.25px solid ${tokens.colors.neutral20}`,
  borderRight: `.25px solid ${tokens.colors.neutral20}`,
  borderBottom: `.25px solid ${tokens.colors.neutral20}`,
  borderRadius: tokens.borderRadius[4],
  minWidth: '300px',
});

export const PanelRecipe = recipe({
  base: basePanelStyle,
  variants: panelVariants,
  defaultVariants: {
    border: 'default',
  },
});
