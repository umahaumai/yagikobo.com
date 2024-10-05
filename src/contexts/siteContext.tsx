import React, { createContext, type ReactNode, useContext } from 'react';
import { createStoreContext, useSelector } from './store';

type ThemeMode = 'light' | 'dark';

const Context = createContext<AppContextProps | undefined>(undefined);
export const useApp = () => useContext(Context);
interface AppContextProps {
  useAppDispach: () => {
    setThemeMode: (themeMode: ThemeMode) => void;
  };
  useThemeMode: () => ThemeMode;
}

interface AppStore {
  themeMode: ThemeMode;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const context = createStoreContext<AppStore>(() => ({
    themeMode: 'light',
  }));
  return (
    <Context.Provider
      value={{
        useAppDispach: () => ({
          setThemeMode: (themeMode: ThemeMode) => context.dispatch((state) => ({ ...state, themeMode })),
        }),
        useThemeMode: () => useSelector(context, (state: AppStore) => state.themeMode),
      }}
    >
      {children}
    </Context.Provider>
  );
};
