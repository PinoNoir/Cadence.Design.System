import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract';

export const fileUploader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.space[8],
});

export const fileContainer = style({
  display: 'grid',
  gap: tokens.space[16],
  gridTemplateColumns: '1fr',
});

export const fileDescription = style({
  fontSize: tokens.fontSize.small,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.base,
  color: tokens.colors.neutral70,
});

export const fileDropContainer = style({
  boxSizing: 'border-box',
  margin: '0',
  fontFamily: 'inherit',
  verticalAlign: 'baseline',
  WebkitAppearance: 'none',
  appearance: 'none',
  background: '0 0',
  cursor: 'pointer',
  textAlign: 'center',
  inlineSize: '100%',
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[700],
  lineHeight: tokens.lineHeight.base,
  color: tokens.colors.teal50,
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '1rem',
  border: `${tokens.borderWidth[2]} dashed ${tokens.colors.teal50}`,
  borderRadius: tokens.borderRadius[4],
  backgroundColor: tokens.colors.teal10,
  blockSize: '6rem',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    borderColor: tokens.colors.teal50,
    backgroundColor: tokens.colors.teal20,
  },
});

export const disabled = style({
  opacity: 0.5,
  cursor: 'not-allowed',
  selectors: {
    '&:not([disabled]):hover': {
      backgroundColor: tokens.colors.teal10,
    },
  },
});

globalStyle(`${fileDropContainer} ${disabled} > button`, {
  opacity: 0.5,
  cursor: 'not-allowed',
});

globalStyle(`${fileDropContainer} ${disabled} > button:hover`, {
  backgroundColor: tokens.colors.teal50,
});

globalStyle(`${fileDropContainer} ${disabled} > button:focus`, {
  outline: 'none',
  boxShadow: 'none',
});
