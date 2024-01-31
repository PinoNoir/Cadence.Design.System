import { style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

export const footerStyles = style({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '300px',
  borderTop: `1px solid ${tokens.colors.neutral20}`,
  backgroundColor: tokens.colors.white,
});

export const footerLinks = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const footerList = style({
  listStyleType: 'none',
  selectors: {
    '&:first-child::after': {
      content: '|',
      color: tokens.colors.neutral40,
    },
  },
});

export const footerLink = style({
  textDecoration: 'none',
  fontSize: tokens.fontSize.small,
  color: tokens.colors.blue50,
  paddingInline: tokens.space[8],
  transition: `all ${tokens.animation.fast}`,
  ':hover': {
    color: tokens.colors.blue70,
    textDecoration: 'underline',
  },
});

export const LogoSection = style({
  marginBlockEnd: tokens.space[32],
});

export const appSection = style({
  fontFamily: tokens.fontFamily.base,
  color: tokens.colors.neutral100,
  fontSize: tokens.fontSize.body,
});

export const contactSection = style({
  marginBlockEnd: tokens.space[24],
  fontSize: tokens.fontSize.body,
  fontFamily: tokens.fontFamily.base,
  color: tokens.colors.neutral100,
});

export const copyrightSection = style({
  fontSize: tokens.fontSize.small,
  fontFamily: tokens.fontFamily.base,
  color: tokens.colors.neutral40,
});

export const footerIcons = style({
  fontSize: '24px',
  marginBlockEnd: tokens.space[8],
  display: 'inline-flex',
  marginInline: tokens.space[8],
});

export const socialLinks = style({
  display: 'inline-flex',
  color: tokens.colors.neutral40,
  fontSize: '24px',
  transition: `color ${tokens.animation.fast}`,
  ':hover': {
    color: tokens.colors.blue50,
  },
});
