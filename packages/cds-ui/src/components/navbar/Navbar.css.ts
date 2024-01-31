import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const navStyles = style({});

globalStyle(`${navStyles} > nav`, {
  display: 'flex',
  alignItems: 'center',
  inlineSize: '100%',
  width: '100%',
  height: '70px',
  backgroundColor: `${tokens.colors.white}`,
  borderBottom: `1px solid ${tokens.colors.neutral30}`,
  margin: '0 auto',
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  fontWeight: tokens.fontWeight.body,
  color: tokens.colors.neutral100,
  marginBottom: '0',
  paddingLeft: '0',
});

export const navLogo = style({
  cursor: 'pointer',
  marginInlineStart: `${tokens.space[32]}`,
  marginInlineEnd: `${tokens.space[24]}`,
  padding: '0',
});

globalStyle(`${navStyles} > nav > ul`, {
  padding: 0,
});

globalStyle(`${navStyles} > nav > ul > li`, {
  listStyleType: 'none',
  height: '100%',
});

globalStyle(`${navStyles} > nav > ul > li > a`, {
  alignItems: 'center',
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  fontWeight: tokens.fontWeight.body,
  color: tokens.colors.neutral100,
  borderBottom: '4px solid transparent',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  paddingInline: `${tokens.space[16]}`,
  textDecoration: 'none',
  transition: 'border-bottom 200ms ease-out',
});

globalStyle(`${navStyles} > nav > ul > li > a:hover`, {
  borderBottom: `4px solid ${tokens.colors.neutral100}`,
});

globalStyle(`${navStyles} > nav > ul > li > a:active`, {
  borderBottom: `4px solid ${tokens.colors.neutral100}`,
});

export const navAvatar = style({
  cursor: 'pointer',
  maxWidth: 'initial',
  height: 'auto',
});

export const avatarContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const avatarTrigger = style({
  backgroundColor: `${tokens.colors.white} !important`,
  marginInlineEnd: `${tokens.space[24]} !important`,
  ':focus': {
    outline: 'none !important',
    boxShadow: `0 0 0 3px ${tokens.colors.transparent} !important`,
  },
});

export const alertContainer = style({
  display: 'inline-flex',
  cursor: 'pointer',
});

export const alertBadge = style({
  position: 'relative',
  top: '-2px',
  right: '15px',
});

export const navLinks = style({
  alignItems: 'center',
  display: 'flex',
  flexBasis: '0',
  flexGrow: '1',
  flexShrink: '1',
  flexWrap: 'wrap',
  height: '100%',
});
