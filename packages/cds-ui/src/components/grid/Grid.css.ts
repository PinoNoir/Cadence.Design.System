import { style } from '@vanilla-extract/css';
import { pxToRem } from '../../utilities/style-utils';
import { tokens } from '../../vanilla-extract/tokens.css';

export const gridExample = style({
  justifyItems: 'center',
  padding: pxToRem(32),
  color: tokens.colors.neutral40,
  background: tokens.colors.neutral100,
  borderRadius: tokens.borderRadius[4],
});
