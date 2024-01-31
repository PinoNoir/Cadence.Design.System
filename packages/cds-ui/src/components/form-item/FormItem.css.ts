import { tokens } from '../../vanilla-extract';
import { style } from '@vanilla-extract/css';

export const formItem = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.small,
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: `16px 16px 16px 16px`,
  backgroundColor: tokens.colors.neutral10,
  border: `${tokens.borderWidth[2]} solid ${tokens.colors.neutral20}`,
  borderRadius: tokens.borderRadius[4],
});
