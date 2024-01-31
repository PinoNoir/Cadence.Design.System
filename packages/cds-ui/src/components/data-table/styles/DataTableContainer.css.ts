import { style } from '@vanilla-extract/css';
import { tokens } from '../../../vanilla-extract/tokens.css';

/**********************************************
				Table Container & Content
**********************************************/

export const container = style({
  position: 'relative',
});

export const containerStatic = style({
  inlineSize: 'fit-content',
});

/**********************************************
				Table Header Styles
**********************************************/

export const header = style({
  paddingBlockEnd: '1rem',
});

export const headerTitle = style({
  fontSize: tokens.fontSize.h3,
  fontWeight: tokens.fontWeight[300],
  color: tokens.colors.neutral100,
});

export const headerDescription = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[300],
  color: tokens.colors.neutral100,
  '@media': {
    'screen and (min-width: 768px)': {
      maxInlineSize: '50ch',
    },
    'screen and (min-width: 1440px)': {
      maxInlineSize: '80ch',
    },
  },
});

export const stickyHeaderMaxWidth = style({
  maxInlineSize: '100%',
});
