import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
// import SitemarkIcon from './SitemarkIcon';

import { Grid2 } from '@mui/material';

import { BpLogo } from "@components";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      BeruPop
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

function FooterLinks(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' }, display: "flex", flexDirection: "column", gap: 2 }}>
          {/* <SitemarkIcon /> */}
          <BpLogo />
          <Grid2 container flexDirection={"column"} spacing={1}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              BeruPop is here to make blindbox trading safer and smoother.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Since most trades happen online, there's often no guarantee you'll receive your items or money. That’s why we created BeruPop Search—our first tool to help you verify sellers before making a deal, so you can trade with confidence.
            </Typography>
          </Grid2>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          Legal
        </Typography>
        <Link color="text.secondary" variant="body2" href="/terms-and-conditions">
          Terms & Conditions
        </Link>
        <Link color="text.secondary" variant="body2" href="/privacy-policy">
          Data Privacy & Security
        </Link>
      </Box>
    </Box>
  )
}

export const FooterBody = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Box>
        <div>
          <Copyright />
        </div>
      </Box>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ justifyContent: 'left', color: 'text.secondary' }}
      >
        <IconButton
          color="inherit"
          size="small"
          href="https://github.com/mui"
          aria-label="GitHub"
          sx={{ alignSelf: 'center' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://x.com/MaterialUI"
          aria-label="X"
          sx={{ alignSelf: 'center' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://www.linkedin.com/company/mui/"
          aria-label="LinkedIn"
          sx={{ alignSelf: 'center' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  )
}

export const Footer = () => {
  return (
    <React.Fragment>
      <Container maxWidth={"xl"}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 4 },
          py: { xs: 4, sm: 4 },
          textAlign: "left",
        }}
      >
        <FooterLinks />
        <FooterBody />
      </Container>
    </React.Fragment>
  );
}
