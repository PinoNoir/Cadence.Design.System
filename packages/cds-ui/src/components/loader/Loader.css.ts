import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract';

/**************************************************
					Spinner Icon Animation
**************************************************/

const spin = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});

const stroke = keyframes({
  '0%': {
    strokeDasharray: '1, 276.46',
    strokeDashoffset: '0',
  },
  '50%': {
    strokeDasharray: '276.46',
    strokeDashoffset: '1',
  },
  '100%': {
    strokeDasharray: '1, 276.46',
    strokeDashoffset: '-276.46',
  },
});

export const base = style({
  blockSize: '5.5rem',
  inlineSize: '5.5rem',
});

export const small = style({
  blockSize: '1.5rem',
  inlineSize: '1.5rem',
});

export const loader = style({
  boxSizing: 'border-box',
  padding: '0',
  border: '0',
  margin: '0',
  fontFamily: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
});

export const loadingStop = style({});

export const loadingSvg = style({
  fill: tokens.colors.transparent,
  animation: `${spin} 1s ease-in-out infinite`,
  selectors: {
    [`${loadingStop} &`]: {
      animation: 'paused',
    },
  },
});

export const loadingStroke = style({
  stroke: tokens.colors.teal50,
  strokeLinecap: 'round',
  animation: `${stroke} 2s ease-in-out 1s infinite both`,
  selectors: {
    [`${loadingStop} &`]: {
      strokeDasharray: '138.23, 200',
      strokeDashoffset: '-276.46',
      strokeWidth: '10',
      animation: 'paused',
    },
    [`${loadingSvg} &`]: {
      strokeWidth: '10',
    },
    [`${loadingSvg}${small} &`]: {
      strokeWidth: '12',
    },
  },
});

export const loadingOverlay = style({
  position: 'fixed',
  zIndex: '6000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(22,22,22,0.5)',
  blockSize: '100%',
  inlineSize: '100%',
  insetBlockStart: '0',
  insetInlineStart: '0',
  transition: 'background-color 700ms cubic-bezier(0.4,0.14,0.3,1)',
});

globalStyle(`${loadingOverlay} circle`, {
  stroke: tokens.colors.teal50,
});

export const loadingOverlayStop = style({
  display: 'none',
});
