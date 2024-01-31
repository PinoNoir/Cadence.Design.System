import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { pxToRem } from '../../utilities/style-utils';
import type { VariantSelection } from '../../utilities/type-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

/**************************************************
					Modal Animation
**************************************************/

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

/**************************************************
					Modal Content
**************************************************/

export const ModalTitle = style({
  fontFamily: 'inherit',
  fontWeight: tokens.fontWeight[300],
  fontSize: tokens.fontSize.h2,
  lineHeight: tokens.lineHeight.headings,
  display: 'inline-block',
  margin: 0,
  marginBlockEnd: tokens.space[24],
  padding: pxToRem(24),
  paddingBottom: 0,
  color: tokens.colors.slate,
});

export const ModalBody = style({
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  marginBottom: pxToRem(24),
  paddingLeft: pxToRem(24),
  paddingRight: pxToRem(24),
  color: tokens.colors.neutral100,
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 256px)',
});

export const ModalFooter = style({
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: tokens.colors.neutral20,
  padding: pxToRem(24),
  paddingTop: pxToRem(24),
});

/**************************************************
					Overlay
**************************************************/

export const ModalOverlay = style({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  inset: '0',
  zIndex: tokens.zIndex.mask,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

/**************************************************
					Width Variant
**************************************************/

export const modalVariants = {
  width: {
    small: {
      width: 'clamp(16em, 80%, 25em)',
    },
    medium: {
      width: 'clamp(16em, 80%, 37.5em)',
    },
    large: {
      width: 'clamp(16em, 80%, 50em)',
    },
  },
};

export type ModalVariants = VariantSelection<typeof modalVariants>;

/**********************************************************************************
					Modal Recipe can be extended to include other states/variants
***********************************************************************************/

export const modalRecipe = recipe({
  base: [
    {
      backgroundColor: tokens.colors.white,
      borderRadius: tokens.borderRadius[4],
      border: 'none',
      boxShadow: tokens.boxShadow.lg,
      zIndex: tokens.zIndex.modal,
      position: 'fixed',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'hidden',
      animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
      ':focus': { outline: 'none' },
      marginBlockStart: '40px',
      marginBlockEnd: '40px',
    },
  ],
  variants: modalVariants,
});

/**************************************************
					Modal Close Icon Button
**************************************************/

export const ModalClose = style({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: tokens.borderRadius.round,
  height: '32px',
  width: '32px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: tokens.colors.neutral100,
  position: 'absolute',
  top: '24px',
  right: '24px',
  transition: 'all 300ms ease-in',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: tokens.colors.neutral20,
  },
  ':focus': {
    boxShadow: `0 0 0 ${tokens.colors.neutral40}`,
  },
});
