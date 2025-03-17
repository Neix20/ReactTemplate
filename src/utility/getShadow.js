
// Mantis

// ==============================|| CUSTOM FUNCTION - COLOR SHADOWS ||============================== //

export default function getShadow(theme, shadow) {
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
