import { tokens } from '../../vanilla-extract/tokens.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { tablePaginationClasses as classes } from '@mui/base/TablePagination';

export const tablePagination = style({
  boxSizing: 'border-box',
  backgroundColor: tokens.colors.white,
  padding: tokens.space[16],
  borderBottom: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
  borderLeft: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
  borderRight: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral20}`,
});

globalStyle(`${tablePagination} .${classes.spacer}`, {
  display: 'none',
});

globalStyle(`${tablePagination} .${classes.toolbar}`, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
});

globalStyle(`${tablePagination} .${classes.selectLabel}`, {
  marginInlineStart: tokens.space[8],
});

globalStyle(`${tablePagination} .${classes.select}`, {
  cursor: 'pointer',
  padding: '.25rem',
  minWidth: 60,
  border: `${tokens.borderWidth[1]} solid ${tokens.colors.neutral60}`,
  borderRadius: 'none',
  backgroundColor: tokens.colors.white,
  transition: `background-color 300ms ease-in-out, box-shadow 0.15s ease-in-out`,
});

globalStyle(`${tablePagination} .${classes.select}:hover`, {
  backgroundColor: tokens.colors.transparent,
});

globalStyle(`${tablePagination} .${classes.select}:focus`, {
  outline: '2px solid transparent',
  boxShadow: `0 0 0 3px rgba(2, 140, 136, 0.4)`,
});

globalStyle(`${tablePagination} .${classes.actions}`, {
  padding: '2px',
  textAlign: 'center',
});

globalStyle(`${tablePagination} .${classes.displayedRows}`, {
  margin: '0',
  '@media': {
    '(min-width: 768px)': {
      marginLeft: 'auto',
    },
  },
});

globalStyle(`${tablePagination} button`, {
  margin: '0 8px',
  border: 'transparent',
  borderRadius: '2px',
  backgroundColor: 'transparent',
  transition: `background-color 300ms ease-in-out, box-shadow 0.15s ease-in-out`,
});

globalStyle(`${tablePagination} button:hover`, {
  backgroundColor: tokens.colors.teal20,
});

globalStyle(`${tablePagination} button:focus`, {
  outline: '2px solid transparent',
  boxShadow: `0 0 0 3px rgba(2, 140, 136, 0.4)`,
});
