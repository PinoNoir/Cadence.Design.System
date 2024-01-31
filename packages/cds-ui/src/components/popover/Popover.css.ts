import { keyframes, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const PopoverTrigger = style({
  cursor: 'pointer',
  backgroundColor: tokens.colors.transparent,
  border: 'none',
});

export const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const PopoverContent = style({
  fontSize: tokens.fontSize.small,
  fontFamily: tokens.fontFamily.base,
  lineHeight: tokens.lineHeight.base,
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: tokens.colors.white,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  ':focus': {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${tokens.colors.neutral10}`,
  },
  selectors: {
    '&[data-state="open"][data-side="top"]': {
      animationName: slideDownAndFade,
    },
    '&[data-state="open"][data-side="right"]': {
      animationName: slideLeftAndFade,
    },
    '&[data-state="open"][data-side="bottom"]': {
      animationName: slideUpAndFade,
    },
    '&[data-state="open"][data-side="left"]': {
      animationName: slideRightAndFade,
    },
  },
});

export const PopoverArrow = style({
  fill: 'white',
});

export const PopoverTriggerIcon = style({
  color: tokens.colors.neutral80,
  fontSize: '20px',
});

export const PopoverClose = style({
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: tokens.borderRadius.round,
  height: '24px',
  width: '24px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: tokens.colors.neutral100,
  position: 'absolute',
  top: '5px',
  right: '5px',
  transition: 'all 300ms ease-in',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: tokens.colors.neutral20,
  },
  ':focus': {
    boxShadow: `0 0 0 ${tokens.colors.neutral40}`,
  },
});
