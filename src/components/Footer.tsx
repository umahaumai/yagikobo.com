import FacebookIcon from '@mui/icons-material/GitHub';
import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import * as React from 'react';

export default function Footer() {
  return (
    <>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 2 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
              Copyright ©&nbsp;
              <Link color="text.secondary" href="https://yagikobo.com/">
                株式会社やぎ工房
              </Link>
              &nbsp;
              {new Date().getFullYear()}
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'left' }}>
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/umahaumai"
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
