import React, { useEffect, useLayoutEffect } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.DARK);

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
      document.documentElement.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
      document.documentElement.classList.remove(Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    document.documentElement.classList.add(Theme.DARK);
    if (localTheme) {
      setTheme(localTheme as Theme);
      if (localTheme === Theme.DARK) {
        document.documentElement.classList.add(Theme.DARK);
      }
    }
    return () => {
      setTheme(Theme.DARK);
      document.documentElement.classList.add(Theme.DARK);
    };
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
