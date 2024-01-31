import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { pxToRem } from '../../utilities/style-utils';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

const buttonVariants = {
  size: {
    small: {
      height: '28px',
      fontSize: tokens.fontSize.small,
      paddingInline: pxToRem(12),
      paddingBlock: pxToRem(4),
    },

    default: {
      height: '36px',
      fontSize: tokens.fontSize.body,
      paddingBlock: pxToRem(8),
      paddingInline: pxToRem(16),
    },

    large: {
      minHeight: '40px',
      fontSize: tokens.fontSize.body,
      paddingBlock: pxToRem(8),
      paddingInline: pxToRem(16),
    },
  },
  fill: {
    none: {
      border: '0px',
      backgroundColor: tokens.colors.transparent,
    },
    transparent: {
      border: tokens.borderWidth[1],
      borderStyle: 'solid',
    },
    solid: {
      color: tokens.colors.current,
      backgroundColor: tokens.colors.current,
    },
  },
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
      background: tokens.colors.neutral100,
      ':hover': {
        backgroundColor: tokens.colors.neutral90,
      },
      ':focus': {
        outline: '2px solid transparent',
        boxShadow: `0 0 0 3px rgba(69, 91, 95, 0.4)`,
      },
      selectors: {
        '&:disabled:not([hover])': {
          color: tokens.colors.neutral60,
          background: tokens.colors.neutral90,
        },
      },
    },

    primary: {
      color: tokens.colors.white,
      background: tokens.colors.teal50,
      ':hover': {
        backgroundColor: tokens.colors.teal70,
      },
      ':focus': {
        outline: '2px solid transparent',
        boxShadow: `0 0 0 3px rgba(2, 140, 136, 0.4)`,
      },
      selectors: {
        '&:disabled:not([hover])': {
          color: tokens.colors.white,
          background: tokens.colors.teal50,
        },
      },
    },

    secondary: {
      color: tokens.colors.neutral100,
      background: tokens.colors.neutral20,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral40}`,
      ':hover': {
        color: tokens.colors.neutral100,
        backgroundColor: tokens.colors.neutral40,
      },
      ':focus': {
        outline: '2px solid transparent',
        boxShadow: `0 0 0 3px rgba(139, 153, 155, 0.4)`,
      },
      selectors: {
        '&:disabled:not([hover])': {
          color: tokens.colors.neutral100,
          background: tokens.colors.neutral20,
        },
      },
    },

    tertiary: {
      color: tokens.colors.white,
      background: tokens.colors.blue50,
      ':hover': {
        backgroundColor: tokens.colors.blue70,
      },
      ':focus': {
        outline: '2px solid transparent',
        boxShadow: `0 0 0 3px rgba(42, 122, 183, 0.4)`,
      },
      selectors: {
        '&:disabled:not([hover])': {
          color: tokens.colors.white,
          background: tokens.colors.blue50,
        },
      },
    },

    accent: {
      color: tokens.colors.white,
      background: tokens.colors.magenta50,
      ':hover': {
        backgroundColor: tokens.colors.magenta70,
      },
      ':focus': {
        outline: '2px solid transparent',
        boxShadow: `0 0 0 3px rgba(178, 24, 118, 0.4)`,
      },
      selectors: {
        '&:disabled:not([hover])': {
          color: tokens.colors.white,
          background: tokens.colors.magenta50,
        },
      },
    },

    error: {
      color: tokens.colors.white,
      background: tokens.colors.red50,
      ':hover': {
        backgroundColor: tokens.colors.red70,
      },
      ':focus': {
        outline: '2px solid transparent',
        boxShadow: `0 0 0 3px rgba(225, 35, 57, 0.4)`,
      },
      selectors: {
        '&:disabled:not([hover])': {
          color: tokens.colors.white,
          background: tokens.colors.red50,
        },
      },
    },
  },
};

export type ButtonVariants = VariantSelection<typeof buttonVariants>;

/********************************************************
					Button Recipe for Base styles and Variants
*********************************************************/

export const baseButtonStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  WebkitFontSmoothing: 'antialiased',
  justifyContent: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer',
  border: 'none',
  maxHeight: '36px',
  minWidth: '100px',
  fontFamily: tokens.fontFamily.base,
  fontWeight: tokens.fontWeight[400],
  borderRadius: tokens.borderRadius[4],
  transition: `background-color 300ms ease-out, box-shadow 150ms ease-out`,
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const buttonRecipe = recipe({
  base: baseButtonStyle,
  variants: buttonVariants,
  compoundVariants: [
    {
      variants: {
        variant: 'primary',
        size: 'default',
        fill: 'transparent',
      },
      style: {
        color: tokens.colors.teal50,
        backgroundColor: tokens.colors.transparent,
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
        ':hover': {
          color: tokens.colors.white,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.teal50,
            backgroundColor: tokens.colors.white,
          },
        },
      },
    },
    {
      variants: {
        variant: 'primary',
        size: 'small',
        fill: 'transparent',
      },
      style: {
        color: tokens.colors.teal50,
        backgroundColor: tokens.colors.transparent,
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
        ':hover': {
          color: tokens.colors.white,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.teal50,
            backgroundColor: tokens.colors.white,
          },
        },
      },
    },
    {
      variants: {
        variant: 'primary',
        size: 'default',
        fill: 'none',
      },
      style: {
        padding: pxToRem(4),
        height: 'auto',
        minWidth: 'auto',
        color: tokens.colors.neutral100,
        backgroundColor: tokens.colors.transparent,
        border: 'none',
        ':hover': {
          color: tokens.colors.neutral60,
          backgroundColor: tokens.colors.transparent,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.neutral40,
            backgroundColor: tokens.colors.transparent,
          },
        },
      },
    },
    {
      variants: {
        variant: 'secondary',
        size: 'default',
        fill: 'transparent',
      },
      style: {
        color: tokens.colors.neutral100,
        backgroundColor: tokens.colors.transparent,
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral40}`,
        ':hover': {
          color: tokens.colors.neutral100,
          backgroundColor: tokens.colors.neutral40,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.neutral100,
            backgroundColor: tokens.colors.white,
          },
        },
      },
    },

    {
      variants: {
        variant: 'tertiary',
        size: 'default',
        fill: 'transparent',
      },
      style: {
        color: tokens.colors.blue50,
        backgroundColor: tokens.colors.transparent,
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.blue50}`,
        ':hover': {
          color: tokens.colors.white,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.blue50,
            backgroundColor: tokens.colors.white,
          },
        },
      },
    },
    {
      variants: {
        variant: 'accent',
        size: 'default',
        fill: 'transparent',
      },
      style: {
        color: tokens.colors.magenta50,
        backgroundColor: tokens.colors.transparent,
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.magenta50}`,
        ':hover': {
          color: tokens.colors.white,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.magenta50,
            backgroundColor: tokens.colors.white,
          },
        },
      },
    },
    {
      variants: {
        variant: 'error',
        size: 'default',
        fill: 'transparent',
      },
      style: {
        color: tokens.colors.red50,
        backgroundColor: tokens.colors.transparent,
        border: `${tokens.borderWidth[1]} solid ${tokens.colors.red50}`,
        ':hover': {
          color: tokens.colors.white,
        },
        ':disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        selectors: {
          '&:disabled:not([hover])': {
            color: tokens.colors.red50,
            backgroundColor: tokens.colors.white,
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: 'default',
    variant: 'primary',
  },
});

/**************************************************
					Spinner Icon Animation
**************************************************/

const Spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const Spinner = style({
  animation: `${Spin} 500ms linear infinite`,
  fontSize: '24px',
});
