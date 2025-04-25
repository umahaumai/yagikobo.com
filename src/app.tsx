import AppAppBar from '@/blog/components/AppAppBar';
import Theme from '@/components/theme';
import { AppProvider } from '@/contexts/siteContext';
import { Container } from '@mui/material';
import type { PageProps } from 'gatsby';
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';
import Footer from './components/Footer';

interface AppProps {
  children: React.ReactNode;
}

export const App = ({ children }: AppProps) => (
  <AppProvider>
    <Theme>
      <AppAppBar />
      <Container maxWidth="md" component="main" sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        {children}
      </Container>
      <Footer />
    </Theme>
  </AppProvider>
);

interface wrapPageElementProps {
  element: React.ReactNode;
  props: PageProps;
}

export const wrapPageElement = ({ element }: wrapPageElementProps) => <App>{element}</App>;
