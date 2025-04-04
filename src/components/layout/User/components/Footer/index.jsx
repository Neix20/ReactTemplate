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
      Sitemark
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
        width: '100%',
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
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
          </Grid2>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              Email
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                slotProps={{
                  htmlInput: {
                    autoComplete: 'off',
                    'aria-label': 'Enter your email address',
                  },
                }}
                sx={{ width: '250px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Product
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Features
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Testimonials
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Highlights
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Pricing
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          FAQs
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Company
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          About us
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Careers
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Press
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
          Legal
        </Typography>
        <Link color="text.secondary" variant="body2" href="#">
          Terms
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Privacy
        </Link>
        <Link color="text.secondary" variant="body2" href="#">
          Contact
        </Link>
      </Box>
    </Box>
  )
}

export const FooterBody = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        mt: "auto"
      }}
    >
      <Box>
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
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
