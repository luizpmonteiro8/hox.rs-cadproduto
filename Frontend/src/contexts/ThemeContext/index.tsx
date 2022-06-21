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
    switch (localTheme) {
      case 'greyColor':
        setPageTheme(greyColor);
        break;
      case 'greenColor':
        setPageTheme(greenColor);
        break;
      case 'blueColor':
        setPageTheme(blueColor);
        break;

      default:
        break;
    }
  }, []);

  const handleSetTheme: PageThemeContextValues['setTheme'] = useCallback((mode = 'greyColor') => {
    if (mode === 'greyColor') {
      setPageTheme(greyColor);
      localStorage.setItem('theme', 'greyColor');
    }
    if (mode === 'greenColor') {
      setPageTheme(greenColor);
      localStorage.setItem('theme', 'greenColor');
    }
    if (mode === 'blueColor') {
      setPageTheme(blueColor);
      localStorage.setItem('theme', 'blueColor');
    }
  }, []);

  return (
    <PageThemeContext.Provider value={{ theme: pageTheme, setTheme: handleSetTheme }}>
      <ThemeProvider theme={pageTheme}>{children}</ThemeProvider>
    </PageThemeContext.Provider>
  );
};
