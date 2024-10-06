import AppAppBar from '@/blog/components/AppAppBar';
import Footer from '@/blog/components/Footer';
import Theme from '@/components/theme';
import { AppProvider } from '@/contexts/siteContext';
import { Container } from '@mui/material';
import type { PageProps } from 'gatsby';
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

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
    </Theme>
    <Footer />
  </AppProvider>
);

interface wrapPageElementProps {
  element: React.ReactNode;
  props: PageProps;
}

export const wrapPageElement = ({ element }: wrapPageElementProps) => <App>{element}</App>;
