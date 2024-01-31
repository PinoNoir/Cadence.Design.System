import { globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

/**************************************************
        Base Styles
**************************************************/

export const checkboxWrapper = style({
  position: 'relative',
  marginBlockEnd: tokens.space[4],
  selectors: {
    '&:first-of-type': {
      marginBlockStart: '0.1875rem',
    },
  },
});
export const checkboxWrapperReadOnly = style({
  position: 'relative',
  marginBlockEnd: tokens.space[4],
  selectors: {
    '&:first-of-type': {
      marginBlockStart: '0.1875rem',
    },
  },
});
export const checkboxWrapperWarning = style({
  position: 'relative',
  marginBlockEnd: tokens.space[4],
  selectors: {
    '&:first-of-type': {
      marginBlockStart: '0.1875rem',
    },
  },
});
export const checkboxWrapperInvalid = style({
  position: 'relative',
  marginBlockEnd: tokens.space[4],
  selectors: {
    '&:first-of-type': {
      marginBlockStart: '0.1875rem',
    },
  },
});

export const formItem = style({
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.small,
  fontWeight: tokens.fontWeight[400],
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const checkbox = style({
  all: 'unset',
  cursor: 'pointer',
  display: 'inline-flex',
  flexShrink: 0,
  height: '16px',
  width: '16px',
  justifyContent: 'center',
  marginInlineEnd: tokens.space[4],
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral60}`,
  borderRadius: '0.15em',
  ':focus': {
    outline: '2px solid transparent',
    boxShadow: '0 0 0 3px rgba(135, 188, 255, 0.6)',
  },
  selectors: {
    /**************************************************
            Checked
    **************************************************/
    '&[data-state="checked"]': {
      backgroundColor: tokens.colors.blue50,
      borderColor: tokens.colors.blue50,
    },
    /**************************************************
            Unchecked
    **************************************************/
    '&[data-state="unchecked"]': {
      backgroundColor: tokens.colors.white,
      borderColor: tokens.colors.neutral60,
    },
    /**************************************************
            Indeterminate
    **************************************************/
    '&[data-state="indeterminate"]': {
      backgroundColor: tokens.colors.white,
      borderColor: tokens.colors.neutral60,
    },
    /**************************************************
					Disabled
    **************************************************/
    '&[data-disabled]': {
      cursor: 'not-allowed',
      backgroundColor: tokens.colors.neutral20,
      borderColor: tokens.colors.neutral30,
    },
  },
});

globalStyle(`${checkbox}:disabled + label`, {
  color: tokens.colors.neutral30,
});

globalStyle(`${checkbox}[data-state="checked"] svg`, {
  color: tokens.colors.white,
  width: '16px',
  height: '16px',
});

globalStyle(`${checkbox}[data-disabled] svg`, {
  display: 'none',
});

/**************************************************
        Label & Text States
**************************************************/

export const formRequirement = style({
  display: 'block',
  overflow: 'visible',
  marginBlockStart: '0',
  WebkitMarginStart: '0.5rem',
  marginInlineStart: '0.5rem',
  maxBlockSize: '100%',
});

export const checkboxLabel = style({
  display: 'inline-flex',
  flexWrap: 'wrap',
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.small,
  color: tokens.colors.neutral100,
});

export const checkboxLabelText = style({
  WebkitPaddingStart: '0.375rem',
  paddingInlineStart: '0.375rem',
});

export const checkboxHelperText = style({
  fontSize: tokens.fontSize.small,
  lineHeight: tokens.lineHeight.small,
  zIndex: '0',
  color: tokens.colors.neutral80,
  inlineSize: '100%',
  marginBlockStart: tokens.space[4],
  opacity: '1',
});

export const checkboxInvalidIcon = style({
  margin: '0.0625rem 0.0625rem 0 0.1875rem',
  color: tokens.colors.red50,
  minInlineSize: '1.25rem',
});

export const checkboxInvalidIconWarning = style({
  margin: '0.0625rem 0.0625rem 0 0.1875rem',
  color: tokens.colors.yellow70,
  minInlineSize: '1.25rem',
});

export const checkboxValidationMsg = style({
  display: 'none',
  alignItems: 'flex-start',
  marginBlockStart: '0.25rem',
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
