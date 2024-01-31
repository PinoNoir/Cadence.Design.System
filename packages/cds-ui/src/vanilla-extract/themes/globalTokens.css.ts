import { createTheme } from '@vanilla-extract/css';
import {
  animation,
  breakpoints,
  MediaQueries,
  space,
  size,
  boxShadow,
  borderRadius,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  zIndex,
} from '../tokens.css';

const [baseTheme, baseVars] = createTheme({
  animation,
  breakpoints,
  MediaQueries,
  space,
  size,
  boxShadow,
  borderRadius,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  zIndex,
});

export const base = {
  class: baseTheme,
  tokens: baseVars,
};
