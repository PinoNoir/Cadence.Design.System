import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { pxToRem } from '../../utilities/style-utils';
import { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

export const iconContainer = style({
  display: 'grid',
  gap: tokens.space[8],
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
});

globalStyle(`${iconContainer} > div`, {
  border: `1px solid ${tokens.colors.neutral20}`,
  borderRadius: '8px',
  padding: '2rem 1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

globalStyle(`${iconContainer} > div > span`, {
  marginTop: tokens.space[16],
});

const iconVariants = {
  size: {
    small: {
      width: '20px',
      height: '20px',
    },

    default: {
      width: '24px',
      height: '24px',
    },

    large: {
      width: '32px',
      height: '32px',
    },
  },
  color: {
    default: {
      fill: tokens.colors.neutral100,
      transition: `fill 300ms ease-out`,
      ':hover': {
        cursor: 'pointer',
        fill: tokens.colors.neutral90,
      },
    },

    primary: {
      fill: tokens.colors.teal50,
      transition: `fill 300ms ease-out`,
      ':hover': {
        cursor: 'pointer',
        fill: tokens.colors.teal70,
      },
    },

    secondary: {
      fill: tokens.colors.neutral40,
      transition: `fill 300ms ease-out`,
      ':hover': {
        cursor: 'pointer',
        fill: tokens.colors.neutral60,
      },
    },

    tertiary: {
      fill: tokens.colors.blue50,
      transition: `fill 300ms ease-out`,
      ':hover': {
        cursor: 'pointer',
        fill: tokens.colors.blue70,
      },
    },

    accent: {
      fill: tokens.colors.magenta50,
      transition: `fill 300ms ease-out`,
      ':hover': {
        cursor: 'pointer',
        fill: tokens.colors.magenta70,
      },
    },

    disabled: {
      cursor: 'not-allowed',
      fill: tokens.colors.neutral30,
    },

    info: {
      fill: tokens.colors.blue50,
      transition: `fill 300ms ease-out`,
      ':hover': {
        cursor: 'pointer',
        fill: tokens.colors.blue70,
      },
    },

    success: {
      fill: tokens.colors.green50,
      transition: `fill 300ms ease-out`,
      ':hover': {
        fill: tokens.colors.green70,
      },
    },

    warning: {
      fill: tokens.colors.yellow70,
      transition: `fill 300ms ease-out`,
      ':hover': {
        fill: tokens.colors.yellow90,
      },
    },

    error: {
      fill: tokens.colors.red50,
      transition: `fill 300ms ease-out`,
      ':hover': {
        fill: tokens.colors.red70,
      },
    },
  },
};

export type IconVariants = VariantSelection<typeof iconVariants>;

export const iconRecipe = recipe({
  base: [{ width: pxToRem(24), height: pxToRem(24) }],
  variants: iconVariants,
});
