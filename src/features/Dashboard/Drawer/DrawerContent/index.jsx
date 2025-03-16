// project imports
import Navigation from './Navigation';
import { useGetMenuMaster } from '@hooks/mantis/menu';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (<Navigation />);
}
