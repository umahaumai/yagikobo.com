import { useApp } from '@/contexts/siteContext';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { alpha, styled } from '@mui/material/styles';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import ToggleColorMode from './ToggleColorMode';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const { useThemeMode, useAppDispatch } = useApp();
  const mode = useThemeMode();
  const { setThemeMode } = useAppDispatch();
  const toggleColorMode = () => {
    setThemeMode(mode === 'dark' ? 'light' : 'dark');
  };

  const handleMenuClick = (href: string) => {
    navigate(href);
    setOpen(false);
  };

  const data = useStaticQuery(graphql`
    query appBarQuery {
      logo_dark: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40)
        }
      }
      logo_light: file(relativePath: { eq: "logo-light.png" }) {
        childImageSharp {
          gatsbyImageData(width: 40)
        }
      }
    }
  `);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <GatsbyImage
              image={
                mode === 'dark'
                  ? data.logo_dark.childImageSharp.gatsbyImageData
                  : data.logo_light.childImageSharp.gatsbyImageData
              }
              alt="logo"
            />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small" onClick={() => handleMenuClick('/')}>
                トップ
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => handleMenuClick('/company/')}>
                会社情報
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => handleMenuClick('/info/')}>
                ニュース
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => handleMenuClick('/product/')}>
                製品・サービス
              </Button>
              <Button variant="text" color="info" size="small" onClick={() => handleMenuClick('/blog/')}>
                代表ブログ
              </Button>
              <Button variant="text" color="info" size="small">
                お問い合わせ
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <ToggleColorMode data-screenshot="toggle-mode" mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <ToggleColorMode
              data-screenshot="toggle-mode"
              size="medium"
              sx={{ mr: 1 }}
              mode={mode}
              toggleColorMode={toggleColorMode}
            />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={() => handleMenuClick('/')}>トップ</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/company')}>会社情報</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/info')}>ニュース</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/product')}>製品・サービス</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/blog')}>代表ブログ</MenuItem>
                <MenuItem>お問い合わせ</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
