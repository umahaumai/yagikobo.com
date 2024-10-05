import { AppProvider } from '@/contexts/siteContext';
import type { PageProps } from 'gatsby';
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

interface AppProps {
  children: React.ReactNode;
}

export const App = ({ children }: AppProps) => <AppProvider>{children}</AppProvider>;

interface wrapPageElementProps {
  element: React.ReactNode;
  props: PageProps;
}

export const wrapPageElement = ({ element, props }: wrapPageElementProps) => <App {...props} />;
