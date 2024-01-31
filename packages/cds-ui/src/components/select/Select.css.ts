import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const wrapper = style({
  display: 'inline-block',
  maxWidth: '300px',
});

export const label = style({
  display: 'block',
  marginBlockEnd: tokens.space[8],
  marginInlineEnd: tokens.space[8],
  fontSize: tokens.fontSize.body,
  fontFamily: 'inherit',
  fontWeight: tokens.fontWeight[700],
});

export const wrapperInline = style({
  display: 'inline-flex',
  flexFlow: 'row wrap',
  gap: tokens.space[8],
});

export const labelInline = style({
  selectors: {
    [`${wrapper} &`]: {
      flex: '1',
      margin: '8px 0 0 0',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
    },
  },
});

export const trigger = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.small,
  borderWidth: tokens.borderWidth[1],
  borderStyle: 'solid',
  borderColor: tokens.colors.neutral60,
  padding: `${tokens.space[0]} ${tokens.space[8]}`,
  backgroundColor: tokens.colors.white,
  minWidth: '200px',
  height: tokens.size[4],
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  ':focus': {
    border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
    outline: '2px solid transparent',
    boxShadow: `0px 0px 0px 2px ${tokens.colors.teal20}, 0px 0px 0px 2px ${tokens.colors.teal20}`,
  },
  selectors: {
    '&[data-placeholder]': { color: tokens.colors.neutral100 },
    '&[data-disabled]': {
      color: tokens.colors.neutral30,
      pointerEvents: 'none',
    },
  },
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
});

globalStyle(`${trigger} svg`, {
  color: tokens.colors.neutral100,
  width: '20px',
  height: '20px',
  marginInlineStart: tokens.space[8],
});

export const content = style({
  zIndex: 10000,
  overflow: 'hidden',
  backgroundColor: tokens.colors.white,
  borderStyle: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
  borderRadius: tokens.borderRadius[4],
  boxShadow: `0px 10px 20px -10px ${tokens.colors.neutral60}, 0px 10px 10px -15px ${tokens.colors.neutral60}`,
  width: 'var(--radix-select-trigger-width)',
});

export const viewport = style({
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  backgroundColor: tokens.colors.white,
});

export const item = style({
  fontSize: tokens.fontSize.body,
  lineHeight: 1,
  color: tokens.colors.neutral80,
  display: 'flex',
  alignItems: 'center',
  height: 32,
  padding: '0 8px 0 24px',
  position: 'relative',
  userSelect: 'none',
  transition: `background-color 300ms ease`,
  ':focus': {
    border: 'none',
    boxShadow: 'none',
  },
  selectors: {
    '&[data-highlighted]': {
      outline: 'none',
      color: tokens.colors.neutral100,
      backgroundColor: tokens.colors.neutral10,
    },
    '&[data-disabled]': {
      color: tokens.colors.neutral30,
      pointerEvents: 'none',
    },
  },
});

export const itemIndicator = style({
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
});

export const itemLabel = style({
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: tokens.colors.teal50,
});

export const separator = style({
  height: 1,
  backgroundColor: tokens.colors.neutral20,
  margin: 5,
});

const scrollButtonBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 30,
  backgroundColor: 'white',
  color: tokens.colors.neutral100,
  cursor: 'default',
};

export const selectScrollUpButton = style({
  ...scrollButtonBase,
});

export const selectScrollDownButton = style({
  ...scrollButtonBase,
});

export const visuallyHidden = style({
  position: 'absolute',
  overflow: 'hidden',
  width: '1px',
  height: '1px',
  padding: '0',
  border: '0',
  margin: '-1px',
  clip: 'rect(0,0,0,0)',
  visibility: 'inherit',
  whiteSpace: 'nowrap',
});
