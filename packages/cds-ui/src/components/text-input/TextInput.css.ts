import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

/******************************************************************
					Text Input Base Style & Recipe
*******************************************************************/

export const textInput = style({
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
  verticalAlign: 'baseline',
  height: tokens.space[32],
  width: '100%',
  paddingInline: tokens.space[8],
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral60}`,
  transition: `border-color 150ms ease-in-out, box-shadow 150ms ease-in-out`,
  ':focus': {
    border: `${tokens.borderWidth[1]} solid ${tokens.colors.teal50}`,
    outline: '2px solid transparent',
    boxShadow: `0px 0px 0px 2px ${tokens.colors.teal20}, 0px 0px 0px 2px ${tokens.colors.teal20}`,
  },
  '::placeholder': {
    color: tokens.colors.neutral60,
  },
  ':disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    backgroundColor: tokens.colors.neutral30,
  },
  ':read-only': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
  selectors: {
    '&[data-invalid]': {
      color: tokens.colors.red50,
      border: `${tokens.borderWidth[1]} solid ${tokens.colors.red50}`,
      outline: '2px solid transparent',
      boxShadow: `0px 0px 0px 2px ${tokens.colors.red20}, 0px 0px 0px 2px ${tokens.colors.red20}`,
      backgroundColor: tokens.colors.red10,
    },
    '&[data-invalid]:focus-within': {
      outline: '2px solid transparent',
    },
  },
});

/******************************************************************
					Text Input Lable Styles
*******************************************************************/

export const label = style({
  fontSize: tokens.fontSize.body,
  display: 'inline-block',
  marginBottom: tokens.space[8],
  color: tokens.colors.neutral100,
  fontWeight: tokens.fontWeight[700],
  lineHeight: '1rem',
  verticalAlign: 'baseline',
});

export const labelDisabled = style({
  color: tokens.colors.neutral30,
});

/******************************************************************
					Text Input Wrapper Styles
*******************************************************************/

export const formItem = style({
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[400],
  lineHeight: tokens.lineHeight.small,
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const textInputWrapper = style({});

export const textInputFieldOuterWrapper = style({
  display: 'flex',
  width: '100%',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const textInputFieldWrapper = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
});

export const textInputLabelWrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

export const textInputLabelCounter = style({
  selectors: {
    [`${textInputLabelWrapper} &`]: {
      alignSelf: 'end',
    },
  },
});

export const textInputLabelHelperWrapper = style({
  maxWidth: 'fit-content',
  flex: '2',
  flexDirection: 'column',
  marginRight: '24px',
  overflowWrap: 'break-word',
});

/******************************************************************
					Inline Styles
*******************************************************************/

export const textInputWrapperInlineInvalid = style({});

export const textInputWrapperInline = style({
  flexFlow: 'row wrap',
});

export const textInputFieldOuterWrapperInline = style({
  flex: '8',
  flexDirection: 'column',
});

export const formHelperTextInline = style({
  selectors: {
    [`${textInputWrapper} &`]: {
      marginTop: '2px',
    },
  },
});

export const labelInline = style({
  selectors: {
    [`${textInputWrapper} &`]: {
      flex: '1',
      margin: '8px 0 0 0',
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
    },
  },
});

/******************************************************************
					Supportive Text Styles
*******************************************************************/

export const textInputWarning = style({
  paddingRight: '8px',
});

export const textInputInvalid = style({
  paddingRight: '8px',
});

export const formHelperText = style({
  fontSize: tokens.fontSize.small,
  lineHeight: tokens.lineHeight.small,
  width: '100%',
  marginTop: '0.25rem',
  color: tokens.colors.neutral100,
  opacity: '1',
});

export const formHelperTextDisabled = style({
  color: tokens.colors.neutral30,
});

/******************************************************************
					Warning & Error States
*******************************************************************/

export const formRequirement = style({
  color: tokens.colors.neutral100,
  marginBlock: tokens.space[8],
  display: 'block',
  overflow: 'visible',
  maxHeight: '200px',
  fontWeight: '400',
});

export const textInputFieldWrapperWarning = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
});

export const textInputFieldWrapperInvalid = style({});

globalStyle(`${textInputFieldWrapperInvalid} + div`, {
  color: tokens.colors.red50,
});

globalStyle(`${textInputFieldWrapperWarning} input:focus`, {
  color: tokens.colors.neutral100,
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.yellow70}`,
  outline: '2px solid transparent',
  boxShadow: `0px 0px 0px 2px ${tokens.colors.yellow40}, 0px 0px 0px 2px ${tokens.colors.yellow40}`,
});

globalStyle(`${textInputFieldWrapperWarning} input[data-invalid]`, {
  color: tokens.colors.neutral100,
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.red50}`,
  outline: '2px solid transparent',
  boxShadow: `0px 0px 0px 2px ${tokens.colors.red20}, 0px 0px 0px 2px ${tokens.colors.red20}`,
});

globalStyle(`${textInputFieldWrapper} svg`, {
  position: 'absolute',
  top: '50%',
  width: '20px',
  height: '20px',
  right: '1rem',
  WebkitTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)',
});

export const textInputCounterAlert = style({
  position: 'absolute',
  overflow: 'hidden',
  width: '1px',
  height: '1px',
  padding: '0',
  border: '0',
  margin: '-1px',
  clip: 'rect(0,0,0,0)',
});

export const visuallyHidden = style({
  position: 'absolute',
  overflow: 'hidden',
  width: '1px',
  height: '1px',
  padding: '0',
  border: '0',
  margin: '-1px',
  clip: 'rect(0,0,0,0)',
  visibility: 'inherit',
  whiteSpace: 'nowrap',
});
