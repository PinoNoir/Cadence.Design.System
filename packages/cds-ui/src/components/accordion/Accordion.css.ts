import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const dark = style({});

export const accordionContainer = style({
  maxHeight: '100vh',
  maxWidth: tokens.breakpoints.xl,
  boxSizing: 'border-box',
  borderRadius: 3,
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral10}`,
  backgroundColor: tokens.colors.white,
  selectors: {
    [`${dark} &`]: {
      backgroundColor: tokens.colors.neutral100,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral90}`,
    },
  },
});

globalStyle(`${accordionContainer} li`, {
  listStyle: 'none',
});

export const accordionItem = style({
  all: 'unset',
  backgroundColor: tokens.colors.white,
  selectors: {
    [`${dark} &`]: {
      backgroundColor: tokens.colors.neutral100,
    },
  },
});

export const accordionHeader = style({
  all: 'unset',
  boxSizing: 'content-box',
  minHeight: '48px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr 100px 200px auto',
  alignItems: 'center',
  backgroundColor: tokens.colors.white,
  borderBlockEnd: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral10}`,
  ':hover': { backgroundColor: tokens.colors.gray },
  ':focus': {
    outline: '2px solid rgba(2, 140, 136, 0.4)',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  selectors: {
    [`[data-state="open"] &`]: {
      backgroundColor: tokens.colors.gray,
    },
    [`${dark} &`]: {
      backgroundColor: tokens.colors.neutral100,
      color: tokens.colors.neutral10,
      borderBlockEnd: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral90}`,
    },
  },
});

globalStyle(`${dark} ${accordionHeader}:hover`, {
  backgroundColor: tokens.colors.neutral90,
});

export const accordionContent = style({
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  color: tokens.colors.neutral100,
  backgroundColor: tokens.colors.white,
  padding: tokens.space[24],
  borderBlockEnd: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral10}`,
  selectors: {
    [`[data-state="open"] &`]: {
      maxHeight: '1000px',
      visibility: 'visible',
    },
    [`[data-state="closed"] &`]: {
      maxHeight: 0,
      visibility: 'hidden',
    },
    [`${dark} &`]: {
      backgroundColor: tokens.colors.neutral100,
      color: tokens.colors.neutral10,
      borderBlockEnd: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral90}`,
    },
  },
});

globalStyle(`${dark} ${accordionContent} p`, {
  color: tokens.colors.neutral10,
});

export const accordionDescription = style({
  marginInlineEnd: tokens.space[16],
  color: tokens.colors.neutral90,
  fontSize: tokens.fontSize.body,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  selectors: {
    [`${dark} &`]: {
      color: tokens.colors.neutral10,
    },
  },
});

export const accordionLink = style({
  display: 'flex',
  color: tokens.colors.blue50,
});

export const accordionTitle = style({
  fontWeight: tokens.fontWeight[500],
  display: 'flex',
  justifyContent: 'flex-start',
});

export const accordionTrigger = style({
  all: 'unset',
  minHeight: '100%',
  minWidth: '100%',
  alignItems: 'center',
  color: tokens.colors.neutral100,
});

export const accordionChevron = style({
  color: tokens.colors.neutral100,
  marginInline: tokens.space[16],
  height: '20px',
  width: '20px',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    [`[data-state="open"] &`]: { transform: 'rotate(180deg)' },
    [`${dark} &`]: {
      color: tokens.colors.neutral10,
    },
  },
});

export const accordionContextMenu = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'inherit',
  marginInline: tokens.space[16],
  borderRadius: tokens.borderRadius.round,
  height: '24px',
  width: '24px',
  color: tokens.colors.neutral100,
  transition: 'all 300ms ease-in',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: tokens.colors.neutral20,
  },
  ':focus': {
    boxShadow: `0 0 0 ${tokens.colors.neutral40}`,
  },
});

globalStyle(`${dark} ${accordionContextMenu} button > svg`, {
  color: tokens.colors.neutral10,
});

globalStyle(`${dark} ${accordionContextMenu} button:hover > svg`, {
  color: tokens.colors.neutral90,
});
