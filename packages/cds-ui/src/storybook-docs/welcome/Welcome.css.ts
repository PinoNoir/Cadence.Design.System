import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';
import { tokens } from '../../vanilla-extract/tokens.css';

const Bio = 'Bio Sans';

globalFontFace(Bio, {
  src: `local('@sb-theme-assets/fonts/biosans-regular-webfont.woff2') format('woff2')`,
});

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  padding: '3rem',
  overflowY: 'scroll',
  overflowX: 'hidden',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '70em',
  marginBlockStart: tokens.space[8],
});

export const link = style({
  fontSize: tokens.fontSize.h4,
  color: tokens.colors.blue50,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
    color: tokens.colors.blue70,
  },
  ':visited': {
    color: tokens.colors.blue30,
  },
});

export const subheading = style({
  fontFamily: Bio,
  fontWeight: tokens.fontWeight[400],
  fontSize: '.875rem',
  color: tokens.colors.neutral40,
  letterSpacing: '5px',
  textTransform: 'uppercase',
  marginBlockStart: tokens.space[40],
  marginBlockEnd: tokens.space[16],
});

export const linkItem = style({
  padding: tokens.space[16],
  cursor: 'pointer',
  background: tokens.colors.neutral90,
  color: tokens.colors.neutral100,
  border: `1px solid ${tokens.colors.neutral80}`,
  borderRadius: tokens.borderRadius[10],
  transition: 'background 150ms ease-out , border 150ms ease-out , transform 150ms ease-out',
  alignItems: 'flex-start',
  ':active': {
    borderColor: tokens.colors.neutral20,
    transform: 'translate3d(0,0,0)',
  },
  ':hover': {
    borderColor: tokens.colors.teal50,
    transform: 'translate3d(0,-5px,0)',
    boxShadow: 'rgba(0,0,0,0.08) 0 3px 10px 0',
  },
});

globalStyle(`${linkItem} a`, {
  display: 'flex',
  alignItems: 'center',
  fontFamily: Bio,
  fontWeight: 500,
  fontSize: '18px',
  marginInlineStart: tokens.space[16],
  color: tokens.colors.neutral20,
  textDecoration: 'none',
});

export const linkList = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr',
  rowGap: '20px',
  columnGap: '20px',
  minHeight: '200px',
  '@media': {
    '(max-width: 620px)': {
      rowGap: '20px',
      columnGap: '20px',
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

globalStyle(`${linkList} p`, {
  fontSize: tokens.fontSize.body,
  lineHeight: tokens.lineHeight.base,
  color: tokens.colors.neutral40,
  marginTop: tokens.space[8],
  marginInlineStart: tokens.space[16],
});

globalStyle(`${mainContainer} img`, {
  height: '40px',
  width: '40px',
  paddingInlineEnd: tokens.space[16],
});

globalStyle(`${mainContainer} h1`, {
  fontFamily: Bio,
  fontSize: tokens.fontSize.h1,
  fontWeight: '500',
  lineHeight: tokens.lineHeight.base,
  color: tokens.colors.neutral10,
});

globalStyle(`${mainContainer} h2`, {
  fontFamily: Bio,
  fontSize: tokens.fontSize.h2,
  fontWeight: '300',
  lineHeight: tokens.lineHeight.base,
  color: tokens.colors.neutral30,
  marginBlockEnd: tokens.space[8],
});

globalStyle(`${content} > p`, {
  fontSize: tokens.fontSize.h4,
  color: tokens.colors.neutral30,
  marginBlock: tokens.space[8],
});
