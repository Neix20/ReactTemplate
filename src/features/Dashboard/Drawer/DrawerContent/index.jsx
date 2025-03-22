// project imports
import Navigation from './Navigation';
import { useGetMenuMaster } from '@hooks/mantis/menu';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent(props) {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (<Navigation />);
}
