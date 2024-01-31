import { style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const styledLabel = style({
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[700],
  color: tokens.colors.neutral100,
  marginBlockEnd: tokens.space[8],
  lineHeight: '1rem',
  verticalAlign: 'baseline',
});
