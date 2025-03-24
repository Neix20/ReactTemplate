// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Grid2, Box } from '@mui/material';

export default function Footer() {
  return (
    <Grid2 container alignItems={"center"} justifyContent={"space-between"} sx={{ p: '12px 12px 0px', mt: 'auto' }}>
      <Box sx={{ width: { xs: 150, sm: 300 } }}>
        <Typography variant="caption">
          &copy; All rights reserved{' '}
          <Link href="https://codedthemes.com/" target="_blank" underline="hover">
            CodedThemes
          </Link>
        </Typography>
      </Box>
      <Grid2 container alignItems={"center"} spacing={1}>
        <Link href="https://codedthemes.com/about-us/" target="_blank" variant="caption" color="text.primary">
          About us
        </Link>
        <Link href="https://mui.com/legal/privacy/" target="_blank" variant="caption" color="text.primary">
          Privacy
        </Link>
        <Link href="https://mui.com/store/terms/" target="_blank" variant="caption" color="text.primary">
          Terms
        </Link>
      </Grid2>
    </Grid2>
  );
}
