import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const radioButtonGroupLabelLeft = style({});

export const radioButtonGroupLabelRight = style({});

export const radioButtonGroupInvalid = style({});

export const radioButtonGroupWarning = style({});

export const radioButtonGroupReadonly = style({});

export const radioButtonGroupVertical = style({
  flexDirection: 'column',
});

export const visuallyHidden = style({
  position: 'absolute',
  overflow: 'hidden',
  padding: '0',
  border: '0',
  margin: '-1px',
  blockSize: '1px',
  clip: 'rect(0,0,0,0)',
  inlineSize: '1px',
  visibility: 'inherit',
  whiteSpace: 'nowrap',
});

export const radioButtonLabelText = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.small,
});

export const radioButtonWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: '0',
  selectors: {
    '&:not(:last-of-type)': {
      marginInlineEnd: '1rem',
    },
  },
});

export const labelPosition = {
  left: style({
    flexDirection: 'row-reverse',
  }),
  right: style({
    flexDirection: 'row',
  }),
};

export const radioButtonLabel = style({
  fontFamily: tokens.fontFamily.body,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.small,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  WebkitMarginEnd: '1rem',
  marginInlineEnd: '1rem',
});

export const radioButton = style({
  position: 'absolute',
  overflow: 'hidden',
  padding: '0',
  border: '0',
  margin: '-1px',
  blockSize: '1px',
  clip: 'rect(0,0,0,0)',
  inlineSize: '1px',
  visibility: 'inherit',
  whiteSpace: 'nowrap',
});

export const radioButtonAppearance = style({
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  fontFamily: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
  flexShrink: '0',
  border: `1px solid ${tokens.colors.neutral60}`,
  borderRadius: '50%',
  backgroundColor: 'transparent',
  blockSize: '1.125rem',
  inlineSize: '1.125rem',
  marginInline: '0.125rem 0.25rem',
});

// Style when the radio button is checked
globalStyle(`${radioButton}:checked + ${radioButtonLabel} ${radioButtonAppearance}`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `2px solid ${tokens.colors.teal50}`,
});

// Style for the inner circle when the radio button is checked
globalStyle(`${radioButton}:checked + ${radioButtonLabel} ${radioButtonAppearance}::before`, {
  content: '',
  display: 'block',
  borderRadius: '50%',
  backgroundColor: tokens.colors.teal50,
  transform: 'scale(0.5)',
  blockSize: '100%',
  inlineSize: '100%',
  margin: 'auto', // Center the inner circle
});

// Focus styles
globalStyle(`${radioButton}:focus + ${radioButtonLabel} ${radioButtonAppearance}`, {
  outline: '2px solid transparent',
  boxShadow: `0 0 0 3px rgba(2, 155, 151, 0.3)`,
});

// Disabled styles
globalStyle(`${radioButton}:disabled + ${radioButtonLabel} ${radioButtonAppearance}`, {
  cursor: 'not-allowed',
  border: `1px solid ${tokens.colors.neutral30}`,
});

// Disabled Label styles
globalStyle(`${radioButton}:disabled + ${radioButtonLabel} span`, {
  cursor: 'not-allowed',
  color: tokens.colors.neutral30,
});

// Radio button group styles

export const formItem = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.small,
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1rem',
});

export const radioButtonGroup = style({
  boxSizing: 'border-box',
  padding: '0',
  border: '0',
  margin: '0',
  fontFamily: 'inherit',
  fontSize: '100%',
  verticalAlign: 'baseline',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});

export const groupLabel = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[700],
  lineHeight: tokens.lineHeight.small,
  display: 'inline-block',
  color: tokens.colors.neutral80,
  marginBlockEnd: tokens.space[16],
  verticalAlign: 'baseline',
  selectors: {
    'fieldset:disabled &': {
      color: tokens.colors.neutral30,
    },
  },
});

// Styles for invalid states

export const formHelperTextDisabled = style({
  color: tokens.colors.neutral30,
});

export const radioButtonInvalidIcon = style({
  color: tokens.colors.red50,
  marginInlineStart: tokens.space[4],
  selectors: {
    [`svg&`]: {
      width: '16px',
      height: '16px',
    },
  },
});

export const radioButtonInvalidIconWarning = style({
  color: tokens.colors.yellow70,
  marginInlineStart: tokens.space[4],
  selectors: {
    [`svg&`]: {
      width: '16px',
      height: '16px',
    },
  },
});

globalStyle(`${radioButtonGroupInvalid} ${radioButton}:checked + ${radioButtonLabel} ${radioButtonAppearance}`, {
  border: `2px solid ${tokens.colors.red50}`,
  cursor: 'pointer',
});

globalStyle(
  `${radioButtonGroupInvalid} ${radioButton}:checked + ${radioButtonLabel} ${radioButtonAppearance}::before`,
  {
    display: 'none',
  },
);

globalStyle(`${radioButtonGroupInvalid} ${radioButton}:focus + ${radioButtonLabel} ${radioButtonAppearance}`, {
  outline: '2px solid transparent',
  boxShadow: `0 0 0 3px rgba(225, 35, 57, 0.4)`,
});

export const radioButtonValidationMsg = style({
  display: 'flex',
  alignItems: 'flex-end',
  marginBlockStart: tokens.space[12],
  fontSize: tokens.fontSize.small,
  fontWeight: tokens.fontWeight.body,
  lineHeight: tokens.lineHeight.small,
  color: tokens.colors.red50,
  zIndex: '0',
  inlineSize: '100%',
  opacity: '1',
});

export const formRequirement = style({
  marginInlineStart: tokens.space[4],
  selectors: {
    [`${radioButtonGroupInvalid} + ${radioButtonValidationMsg} &`]: {
      color: tokens.colors.red50,
    },
  },
});

export const formHelperText = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight.body,
  lineHeight: tokens.lineHeight.small,
  color: tokens.colors.neutral80,
  zIndex: '0',
  inlineSize: '100%',
  marginBlockStart: tokens.space[4],
  opacity: '1',
  selectors: {
    [`${radioButtonGroup} ~ &`]: {
      marginBlockStart: tokens.space[8],
    },
    ['fieldset:disabled &']: {
      color: tokens.colors.neutral30,
    },
  },
});
