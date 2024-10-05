import type { PaletteMode } from '@mui/material';
import React, { createContext, type ReactNode, useContext, useEffect } from 'react';
import { createStoreContext, useSelector } from './store';

const Context = createContext<AppContextProps | undefined>(undefined);
export const useApp = () => useContext(Context) as AppContextProps;
interface AppContextProps {
  useAppDispach: () => {
    setThemeMode: (themeMode: PaletteMode) => void;
  };
  useThemeMode: () => PaletteMode;
}

interface AppStore {
  themeMode: PaletteMode;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const context = createStoreContext<AppStore>(() => ({
    themeMode: 'light',
  }));
  const setThemeMode = (themeMode: PaletteMode) => {
    context.dispatch((state) => ({ ...state, themeMode }));
    localStorage.setItem('themeMode', themeMode);
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setThemeMode(savedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <Context.Provider
      value={{
        useAppDispach: () => ({
          setThemeMode,
        }),
        useThemeMode: () => useSelector(context, (state: AppStore) => state.themeMode),
      }}
    >
      {children}
    </Context.Provider>
  );
};
