import getBlogTheme from '@/blog/theme/getBlogTheme';
import { useApp } from '@/contexts/siteContext';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { type PaletteMode, ThemeProvider, createTheme } from '@mui/material/styles';
// biome-ignore lint/style/useImportType: <explanation>
import * as React from 'react';

interface TemplateFrameProps {
  children: React.ReactNode;
}

export default function TemplateFrame({ children }: TemplateFrameProps) {
  const { useThemeMode } = useApp();
  const mode = useThemeMode();
  const blogTheme = React.useMemo(() => createTheme(getBlogTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={blogTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
    </ThemeProvider>
  );
}
