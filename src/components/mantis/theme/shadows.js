
import { alpha } from '@mui/material/styles';

export const Shadow = (theme) => ([
    'none',
    'var(--template-palette-baseShadow)',
    ...theme.shadows.slice(2),
    {
        z1: `0px 2px 8px ${alpha('hsl(220, 35%, 3%)', 0.15)}`
      }
]);