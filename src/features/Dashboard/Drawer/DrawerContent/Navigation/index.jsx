// material-ui
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import NavGroup from './NavGroup';
import menuItem from '@components/mantis/menu-items';

import { useContext } from "react";

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

function Index(props) {

    const { menuItems = [] } = useContext();

    // todo: Prevent Prop Drilling
    console.log(menuItems)

    const navGroups = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                );
        }
    });

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}

export default Index;