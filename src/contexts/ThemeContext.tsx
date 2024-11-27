import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '../themes/lightTheme';
import { darkTheme } from '../themes/darkTheme';

type Theme = typeof lightTheme;

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = 'theme';

const getStoredTheme = (): boolean => {
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  return storedTheme ? JSON.parse(storedTheme) : false;
};

const saveTheme = (isDarkMode: boolean) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(isDarkMode));
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getStoredTheme);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      saveTheme(newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
