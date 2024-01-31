import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

export const dividerStyle = style({
  display: 'flex',
  border: 'inset',
  boxSizing: 'content-box',
  marginBlockEnd: tokens.space[8],
});

export const dividerVariants = {
  color: {
    onLight: {
      borderColor: tokens.colors.neutral20,
    },
    onDark: {
      borderColor: tokens.colors.neutral80,
    },
  },
  thickness: {
    thin: {
      borderWidth: '.5px',
    },
    medium: {
      borderWidth: '1px',
    },
    thick: {
      borderWidth: '3px',
    },
  },
  orientation: {
    vertical: {
      borderLeft: '1px',
    },
    horizontal: {
      borderTop: '1px',
    },
  },
};

export type DividerVariants = VariantSelection<typeof dividerVariants>;

export const DividerRecipe = recipe({
  base: dividerStyle,
  variants: dividerVariants,
});
