import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const linkStyle = style({});

globalStyle(`a`, {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  color: tokens.colors.blue50,
  textDecoration: 'none',
  transition: 'color 300ms ease',
});

globalStyle(`a:hover`, {
  color: tokens.colors.blue70,
  textDecoration: 'underline',
});

globalStyle(`a:focus`, {
  outline: `2px solid ${tokens.colors.blue50}`,
  outlineOffset: '2px',
});
