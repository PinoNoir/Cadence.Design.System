import { recipe } from '@vanilla-extract/recipes';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';
import type { VariantSelection } from '../../utilities/type-utils';

const VIEWPORT_PADDING = 25;

export const toastViewport = style({
  zIndex: 2147483647,
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  outline: 'none',
  padding: VIEWPORT_PADDING,
  width: '400px',
  height: 'auto',
  margin: 0,
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const toastRoot = style({
  minHeight: 'fit-content',
  backgroundColor: tokens.colors.white,
  borderRadius: tokens.borderRadius[4],
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
  boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 30px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
  selectors: {
    '&[data-state=open]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe=move]': {
      transform: `translateX(var(--radix-toast-swipe-move-x))`,
    },
    '&[data-swipe=cancel]': {
      transform: 'translateX(0)',
      transition: `transform 200ms ease-out`,
    },
    '&[data-swipe=end]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
});

export const toastTitle = style({
  marginInlineStart: tokens.space[8],
  fontWeight: 400,
  color: tokens.colors.neutral100,
  fontSize: tokens.fontSize.h4,
});

export const toastHeader = style({
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  borderBottom: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexGrow: '1',
  maxHeight: '40px',
  padding: tokens.space[8],
  marginBlockEnd: tokens.space[16],
});

export const toastDescription = style({
  marginInlineStart: tokens.space[16],
  marginBlockEnd: tokens.space[8],
  color: tokens.colors.neutral100,
  fontSize: tokens.fontSize.small,
  lineHeight: tokens.lineHeight.base,
});

export const iconContainer = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifySelf: 'flex-start',
});

export const toastClose = style({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: tokens.borderRadius.round,
  height: '24px',
  width: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: tokens.colors.neutral100,
  transition: 'all 300ms ease-in',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: tokens.colors.white,
  },
  ':focus': {
    boxShadow: `0 0 0 ${tokens.colors.neutral40}`,
  },
});

export const toastLinks = style({
  marginBottom: tokens.space[16],
  marginInlineStart: tokens.space[16],
  wordWrap: 'break-word',
  boxSizing: 'border-box',
  fontSize: tokens.fontSize.body,
});

globalStyle(`${toastLinks} > a`, {
  textDecoration: 'none',
  color: tokens.colors.blue50,
});

export const toastVariants = {
  variant: {
    alert: { background: tokens.colors.blue10 },

    success: { background: tokens.colors.green10 },

    error: { background: tokens.colors.red10 },
  },
};

export type ToastVariants = VariantSelection<typeof toastVariants>;

/******************************************************************
					Toast Recipe for Base styles and Variants
*******************************************************************/

export const ToastRecipe = recipe({
  variants: toastVariants,
  defaultVariants: {
    variant: 'alert',
  },
});
