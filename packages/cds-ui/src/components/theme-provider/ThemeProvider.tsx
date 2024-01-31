import React, { useState } from 'react';
import { base, themes } from '../../vanilla-extract/themes';
import { ThemeContext, ThemeNames } from './ThemeContext';

interface ThemeProviderProps {
  theme: string;
}

function ThemeProvider({ children }: React.PropsWithChildren<ThemeProviderProps>) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeNames>('bccLightTheme');

  const toggleTheme = () => {
    setSelectedTheme((prevValue) => (prevValue === 'bccLightTheme' ? 'bccDarkTheme' : 'bccLightTheme'));
  };

  const colorMode = selectedTheme === 'bccLightTheme' ? themes.bccLightThemeClass : themes.bccLightThemeClass;
  return (
    <ThemeContext.Provider
      value={{
        theme: selectedTheme,
        toggleTheme,
      }}
    >
      <div className={`${base.class} ${colorMode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
