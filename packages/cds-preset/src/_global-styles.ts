import { defineGlobalStyles } from '@pandacss/dev';
import type { GlobalStyleObject } from '@pandacss/types';

export const globalCss: GlobalStyleObject = defineGlobalStyles({
  '*, *:after, *:before': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
    height: '100vh',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
    fontFamily: 'body',
    fontSize: '.875rem',
    fontWeight: '400',
    backgroundColor: '{colors.gray}',
    color: '{colors.neutral.100}',
  },
  'a, button': {
    cursor: 'pointer',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    margin: 0,
    overflowWrap: `break-word`,
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'headings',
  },
  p: {
    fontFamily: 'body',
  },
  ul: {
    listStyle: 'none',
  },
  'input, button, textarea, select': {
    font: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
  },
  'input[type=search]::-ms-clear, input[type=search]::-ms-reveal': {
    display: 'none',
    width: 0,
    height: 0,
  },
  'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration':
    {
      display: 'none',
    },
});
