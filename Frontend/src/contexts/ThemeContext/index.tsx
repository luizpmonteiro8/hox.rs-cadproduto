import React, { createContext, useCallback, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global-styles';
import { greyColor, greenColor, blueColor } from '../../styles/theme';

export type PageThemeProviderProps = {
  children: React.ReactNode;
};

export type PageThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'greyColor' | 'greenColor' | 'blueColor') => void;
};

export const PageThemeContext = createContext<PageThemeContextValues>({
  theme: greyColor,
});

export const PageThemeProvider = ({ children }: PageThemeProviderProps) => {
  const [pageTheme, setPageTheme] = useState(greyColor);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setPageTheme(newTheme);
  }, []);

  const handleSetTheme: PageThemeContextValues['setTheme'] = useCallback((mode = 'greyColor') => {
    if (mode === 'greyColor') {
      setPageTheme(greyColor);
      localStorage.setItem('theme', JSON.stringify(greyColor));
    }
    if (mode === 'greenColor') {
      setPageTheme(greenColor);
      localStorage.setItem('theme', JSON.stringify(greenColor));
    }
    if (mode === 'blueColor') {
      setPageTheme(blueColor);
      localStorage.setItem('theme', JSON.stringify(blueColor));
    }
  }, []);

  return (
    <PageThemeContext.Provider value={{ theme: pageTheme, setTheme: handleSetTheme }}>
      <ThemeProvider theme={pageTheme}>{children}</ThemeProvider>
    </PageThemeContext.Provider>
  );
};
