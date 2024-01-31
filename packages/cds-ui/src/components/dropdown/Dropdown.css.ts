import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const dark = style({});

export const DropdownTrigger = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  padding: tokens.space[4],
  color: tokens.colors.neutral100,
  borderColor: tokens.colors.neutral60,
  backgroundColor: tokens.colors.transparent,
  borderRadius: tokens.borderRadius.round,
  transition: `background-color 300ms ease-in, box-shadow 0.15s ease-in`,
  ':hover': {
    backgroundColor: tokens.colors.neutral20,
  },
  ':focus': {
    backgroundColor: tokens.colors.white,
    outline: '2px solid transparent',
    boxShadow: `0 0 0 3px rgba(139, 153, 155, .4)`,
  },
  selectors: {
    [`${dark} &`]: {
      color: tokens.colors.neutral10,
      borderColor: tokens.colors.neutral80,
      backgroundColor: tokens.colors.transparent,
    },
  },
});

export const DropdownMenuContent = style({
  minWidth: 'auto',
  backgroundColor: tokens.colors.white,
  borderRadius: tokens.borderRadius[4],
  boxShadow: tokens.boxShadow.small,
  zIndex: 1,
});

globalStyle(`${DropdownMenuContent} svg`, {
  fontSize: '20px',
  marginInlineEnd: tokens.space[8],
});

export const DropdownMenuItem = style({
  all: 'unset',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.small,
  color: tokens.colors.neutral100,
  height: tokens.space[32],
  padding: '8px 16px 8px 16px',
  position: 'relative',
  transition: `background-color ${tokens.animation.fast}`,
  userSelect: 'none',
  ':focus': {
    outline: 'none',
    boxShadow: 'none',
    borderRadius: 'none',
  },
  selectors: {
    '&:first-child': {
      paddingBlockStart: tokens.space[4],
    },
    '&:last-child': {
      paddingBlockEnd: tokens.space[4],
    },
    '&[data-disabled]': {
      color: tokens.colors.neutral30,
      pointerEvents: 'none',
    },
    '&[data-highlighted]': {
      color: tokens.colors.neutral100,
      backgroundColor: tokens.colors.neutral10,
    },
  },
});

globalStyle(`${DropdownMenuItem} svg`, {
  color: tokens.colors.neutral80,
  fontSize: '20px',
  marginInlineEnd: tokens.space[8],
});

globalStyle(`${DropdownMenuItem}[data-disabled] svg`, {
  color: tokens.colors.neutral30,
  fontSize: '20px',
  marginInlineEnd: tokens.space[8],
});

globalStyle(`${DropdownMenuItem}[data-selected] svg`, {
  color: tokens.colors.white,
  fontSize: '20px',
  marginInlineEnd: tokens.space[8],
});
