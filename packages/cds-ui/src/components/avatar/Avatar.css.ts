import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract';

export const avatarStyle = style({
  overflow: 'hidden',
  borderRadius: '9999px',
});

export const avatarPlaceholder = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: tokens.colors.neutral60,
});

export const placeholderText = style({
  color: tokens.colors.white,
  fontWeight: tokens.fontWeight[500],
  lineHeight: tokens.lineHeight.small,
  textAlign: 'center',
  textTransform: 'uppercase',
});

const avatarVariants = {
  size: {
    sm: {
      width: '1.25rem',
      height: '1.25rem',
      selectors: {
        [`&:has(> span)`]: {
          fontSize: '0.75rem',
        },
      },
    },
    md: {
      width: '2.5rem',
      height: '2.5rem',
      selectors: {
        [`&:has(> span)`]: {
          fontSize: '1rem',
        },
      },
    },
    lg: {
      width: '5rem',
      height: '5rem',
      selectors: {
        [`&:has(> span)`]: {
          fontSize: '2rem',
        },
      },
    },
    xl: {
      width: '7.5rem',
      height: '7.5rem',
      selectors: {
        [`&:has(> span)`]: {
          fontSize: '3.5rem',
        },
      },
    },
  },
};

export type AvatarVariants = VariantSelection<typeof avatarVariants>;

export const avatarRecipe = recipe({
  base: avatarStyle,
  variants: avatarVariants,
  defaultVariants: {
    size: 'md',
  },
});
