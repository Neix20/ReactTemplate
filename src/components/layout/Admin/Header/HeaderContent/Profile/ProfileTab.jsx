import PropTypes from 'prop-types';

// material-ui
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// @assets
import { AccountBox, ManageAccounts } from "@mui/icons-material";;

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

export default function ProfileTab() {

	const navigate = useNavigate();

	const GoToProfile = () => {
		navigate('/Profile');
	}

	const GoToAdminProfile = () => {
		navigate('/Admin');
	}

  const { role = "User" } = useSelector(Selectors.userSelect);

	return (
		<List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
			{/* <ListItemButton>
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton> */}
			<ListItemButton onClick={GoToAdminProfile} sx={{ display: role === "Admin" ? "flex" : "none" }}>
				<ListItemIcon>
					<ManageAccounts />
				</ListItemIcon>
				<ListItemText primary="View Admin Profile" />
			</ListItemButton>
			<ListItemButton onClick={GoToProfile}>
				<ListItemIcon>
					<AccountBox />
				</ListItemIcon>
				<ListItemText primary="View Profile" />
			</ListItemButton>
			{/* <ListItemButton>
        <ListItemIcon>
          <ProfileOutlined />
        </ListItemIcon>
        <ListItemText primary="Social Profile" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <WalletOutlined />
        </ListItemIcon>
        <ListItemText primary="Billing" />
      </ListItemButton> */}
			{/* <ListItemButton>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton> */}
		</List>
	);
}

ProfileTab.propTypes = { handleLogout: PropTypes.func };
