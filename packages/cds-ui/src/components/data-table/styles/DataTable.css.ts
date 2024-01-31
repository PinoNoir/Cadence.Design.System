import { globalStyle, style } from '@vanilla-extract/css';
import type { VariantSelection } from '../../../utilities/type-utils';
import { tokens } from '../../../vanilla-extract/tokens.css';

/**********************************************
				Base Table Styles
**********************************************/

export const content = style({
  display: 'block',
  overflowX: 'auto',
});

export const staticWidth = style({
  inlineSize: 'auto',
});

export const dataTable = style({
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
  borderSpacing: 0,
  fontFamily: tokens.fontFamily.body,
  inlineSize: '100%',
  border: `1px solid ${tokens.colors.neutral20}`,
});

/**********************************************
				thead Element
**********************************************/

globalStyle(`${dataTable} thead`, {
  backgroundColor: tokens.colors.neutral90,
  fontSize: tokens.fontSize.body,
  color: tokens.colors.white,
  paddingInlineStart: '1rem',
  paddingInlineEnd: '1rem',
  height: '40px',
});

globalStyle(`${dataTable} thead th`, {
  paddingInlineStart: '1rem',
  paddingInlineEnd: '1rem',
  height: '40px',
});

/**********************************************
				tr Element
**********************************************/

export const dataTableRow = style({
  fontSize: '13px',
  color: tokens.colors.neutral80,
  backgroundColor: tokens.colors.white,
  paddingInlineStart: '1rem',
  paddingInlineEnd: '1rem',
  height: '48px',
  selectors: {
    [`${dataTable} tbody tr&:hover`]: {
      backgroundColor: tokens.colors.teal20,
      cursor: 'pointer',
    },
    [`${dataTable} tbody tr&:nth-child(even)`]: {
      backgroundColor: tokens.colors.gray,
    },
    [`${dataTable} tbody tr&:nth-child(even):hover`]: {
      backgroundColor: tokens.colors.teal20,
      cursor: 'pointer',
    },
  },
});

export const selected = style({
  color: tokens.colors.teal50,
  backgroundColor: tokens.colors.teal10,
  selectors: {
    [`${dataTable} tbody tr&:nth-child(even)`]: {
      backgroundColor: tokens.colors.teal10,
      cursor: 'pointer',
    },
  },
});

globalStyle(`tbody tr${dataTableRow}${selected} > td > button`, {
  backgroundColor: tokens.colors.teal50,
  color: tokens.colors.white,
});

/**********************************************
				th Element
**********************************************/

globalStyle(`${dataTable} th, td`, {
  textAlign: 'start',
  verticalAlign: 'middle',
});

globalStyle(`${dataTable} th:last-of-type`, {
  position: 'static',
  inlineSize: 'auto',
});

export const sort = style({});

export const dataTableHeader = style({
  fontFamily: tokens.fontFamily.base,
  fontWeight: tokens.fontWeight[500],
  color: tokens.colors.white,
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  selectors: {
    [`${sort} &`]: {
      boxSizing: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'lightgray',
      color: 'darkgrey',
      font: 'inherit',
      inlineSize: '100%',
      lineHeight: '1',
      minBlockSize: '100%',
      paddingInlineStart: '4px',
      textAlign: 'start',
      transition: 'background-color 300ms ease-in , outline 300ms ease-in',
    },
    [`${sort} &:hover`]: {
      color: 'white',
      outline: '2px solid transparent',
    },
    [`${sort} &:focus`]: {
      outline: '2px solid transparent',
    },
  },
});

globalStyle(`${dataTableHeader} > button`, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const sortIcon = style({
  color: tokens.colors.neutral10,
  marginInlineStart: tokens.space[8],
  height: '20px',
  width: '20px',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    [`&[data-state="none"]`]: { transform: 'rotate(0deg)' },
    [`&[data-state="ascending"]`]: { transform: 'rotate(180deg)' },
    [`&[data-state="descending"]`]: { transform: 'rotate(0deg)' },
  },
});

/**********************************************
				td Element
**********************************************/

globalStyle(`${dataTable} td`, {
  WebkitPaddingEnd: '1rem',
  paddingInlineEnd: '1rem',
  WebkitPaddingStart: '1rem',
  paddingInlineStart: '1rem',
});

globalStyle('tbody a', {
  color: tokens.colors.blue50,
});

globalStyle(`td:last-child`, {
  marginInlineEnd: tokens.space[24],
});

/**********************************************
				Checkbox Column
**********************************************/

export const checkboxColumn = style({
  ':hover': {
    cursor: 'pointer',
  },
  selectors: {
    [`${dataTable} tbody td&`]: {
      minInlineSize: '2.5rem',
      paddingInlineEnd: '0.25rem',
      paddingInlineStart: '1rem',
      width: '60px',
      height: '60px',
    },
    [`${dataTable} thead th&`]: {
      minInlineSize: '2.5rem',
      paddingInlineEnd: '0.25rem',
      paddingInlineStart: '1rem',
      width: '60px',
      height: '60px',
    },
    [`${dataTable} th&`]: {
      position: 'static',
      inlineSize: '2rem',
      transition: 'background-color 70ms cubic-bezier(0,0,0.38,0.9)',
    },
  },
});

/**************************************************
        Inline Checkbox styles
**************************************************/

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="#fff" d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"/>
</svg>`;
const encodedSvg = encodeURIComponent(svgIcon);

globalStyle(`${dataTable} input[type="checkbox"]`, {
  position: 'relative',
  cursor: 'pointer',
  appearance: 'none',
});

globalStyle(`${dataTable} input[type='checkbox']::before`, {
  content: '',
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '0',
  color: tokens.colors.neutral60,
  flexShrink: 0,
  height: '16px',
  width: '16px',
  justifyContent: 'center',
  marginInlineEnd: tokens.space[4],
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral60}`,
  borderRadius: '0.15em',
  display: 'inline-flex',
});

globalStyle(`${dataTable} input[type='checkbox']:checked::before`, {
  content: '',
  display: 'block',
  position: 'absolute',
  width: '16px',
  height: '16px',
  top: '0',
  left: '0',
  backgroundColor: tokens.colors.blue50,
  border: tokens.colors.blue50,
});

globalStyle(`${dataTable} input[type='checkbox']:checked::after`, {
  content: '""',
  display: 'block',
  position: 'absolute',
  width: '16px',
  height: '16px',
  backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  top: '0px',
  left: '0px',
});

globalStyle(`${dataTable} input[type='checkbox']:checked::after :focus`, {
  outline: '2px solid transparent',
  boxShadow: '0 0 0 3px rgba(135, 188, 255, 0.6)',
});

globalStyle(`${dataTable} input[type='checkbox']:checked::after svg`, {
  color: tokens.colors.white,
  width: '16px',
  height: '16px',
});

export const checkboxLabel = style({
  fontFamily: tokens.fontFamily.base,
  fontSize: tokens.fontSize.body,
  fontWeight: tokens.fontWeight[700],
  color: tokens.colors.neutral100,
  position: 'relative',
  display: 'flex',
  cursor: 'pointer',
  minBlockSize: '1.25rem',
  paddingBlockStart: '0.125rem',
  paddingInlineStart: '1.25rem',
  userSelect: 'none',
});

export const checkboxInline = style({
  position: 'relative',
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

/**********************************************
				Pagination
**********************************************/

export const pageLink = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  color: tokens.colors.blue50,
  backgroundColor: tokens.colors.white,
  border: 'none',
  ':hover': {
    color: tokens.colors.white,
    backgroundColor: tokens.colors.blue50,
  },
});

export const currentPage = style([
  pageLink,
  {
    fontWeight: 'bold',
  },
]);

export const pageButton = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  backgroundColor: tokens.colors.white,
  color: tokens.colors.neutral70,
  border: 'none',
  ':hover': {
    backgroundColor: tokens.colors.neutral70,
    color: tokens.colors.white,
  },
});

export const pageLinkContainer = style({
  maxWidth: '120px',
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

/**********************************************
				Table Variants
**********************************************/

const tableVariants = {
  size: {
    md: {
      [`${dataTable}`]: {
        height: '40px',
        padding: `10px 30px`,
      },
    },
    lg: {
      [`${dataTable}`]: {
        height: '50px',
        padding: `20px 30px`,
      },
    },
    xl: {
      [`${dataTable}`]: {
        height: '60px',
        padding: `40px 30px`,
      },
    },
  },
  corners: {
    round: {
      [`${dataTable}`]: {
        '&:first-of-type': { borderTopLeftRadius: '0px' },
        '&:last-of-type': { borderTopRightRadius: '0px' },
      },
      [`${dataTable} tr:last-child`]: {
        [`${dataTable} td:first-child`]: { borderBottomLeftRadius: '0px' },
        [`${dataTable} td:last-child`]: { borderBottomRightRadius: '0px' },
      },
    },
  },
};

export type TableVariants = VariantSelection<typeof tableVariants>;
