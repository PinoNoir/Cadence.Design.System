import { style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const switchBase = style({
  display: 'block',
  margin: '0',
});

export const switchLabel = style({
  display: 'block',
  marginBlockEnd: tokens.space[8],
});

export const switchRoot = style({
  all: 'unset',
  cursor: 'pointer',
  width: '36px',
  height: '14px',
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: tokens.colors.neutral40,
  borderRadius: '9999px',
  transition: 'background-color 300ms ease-in-out',
  selectors: {
    /**************************************************
					Checked
    **************************************************/
    '&[data-state="checked"]': {
      backgroundColor: tokens.colors.blue30,
    },
    /**************************************************
					Disabled
    **************************************************/
    '&[data-disabled]': {
      cursor: 'not-allowed',
      opacity: tokens.opacity[30],
    },
  },
});

export const switchThumb = style({
  position: 'relative',
  width: '20px',
  height: '20px',
  backgroundColor: tokens.colors.neutral70,
  borderRadius: '9999px',
  boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
  transition: 'transform 100ms',
  transform: 'translateX(0px)',
  willChange: 'transform',
  ':hover': {
    outline: `8px solid rgba(0, 0, 0, 0.04)`,
  },
  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: tokens.colors.blue50,
      transform: 'translateX(16px)',
    },
    '&[data-state="checked"]:hover': {
      outline: `8px solid rgba(42, 122, 183, 0.08)`,
    },
  },
});
