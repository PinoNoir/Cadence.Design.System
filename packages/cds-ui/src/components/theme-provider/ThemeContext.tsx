/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

export type ThemeNames = 'bccLightTheme' | 'bccDarkTheme';

export type ThemeContextValue = {
  theme: ThemeNames;
  toggleTheme: unknown;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'bccLightTheme',
  toggleTheme: null,
});

export const useThemeValue = () => useContext(ThemeContext);
