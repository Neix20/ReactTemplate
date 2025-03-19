
import { blue } from "@mui/material/colors";

export const brand = blue;

export const getColors = (theme, color) => {
    switch (color) {
        case 'secondary':
            return theme.palette.secondary;
        case 'error':
            return theme.palette.error;
        case 'warning':
            return theme.palette.warning;
        case 'info':
            return theme.palette.info;
        case 'success':
            return theme.palette.success;
        default:
            return theme.palette.primary;
    }
}

export const getShadow = (theme, shadow) => {
    switch (shadow) {
      case 'secondary':
        return theme.shadows.secondary;
      case 'error':
        return theme.shadows.error;
      case 'warning':
        return theme.shadows.warning;
      case 'info':
        return theme.shadows.info;
      case 'success':
        return theme.shadows.success;
      case 'primaryButton':
        return theme.shadows.primaryButton;
      case 'secondaryButton':
        return theme.shadows.secondaryButton;
      case 'errorButton':
        return theme.shadows.errorButton;
      case 'warningButton':
        return theme.shadows.warningButton;
      case 'infoButton':
        return theme.shadows.infoButton;
      case 'successButton':
        return theme.shadows.successButton;
      default:
        return theme.shadows.primary;
    }
  }
  