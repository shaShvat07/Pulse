import * as React from 'react';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import useStyles from './styles';
import { Search } from '../index';
import { blue, pink } from '@mui/material/colors';
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.js";
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from "react";
import { Chats } from '../index';

const Sidebar = () => {
    const classes = useStyles();
    const {currentUser} = useContext(AuthContext)
    return (
        <div className={classes.wholeSidebar}>
            <div className={classes.navbarP}>
            <div className={classes.combine}>
            <Toolbar className={classes.signOutButton}>
            <Avatar sx={{ width: 50, height: 50 }} alt="" src={currentUser.photoURL} />
                <Typography variant="h6" noWrap component="div">
                    &nbsp; {currentUser.displayName}
                </Typography>
            </Toolbar>
            <Toolbar className={classes.signOutButton}>
                <Button onClick={() => signOut(auth)} size="medium" color="error" variant="contained">Sign Out</Button>
            </Toolbar>
            </div>
            </div>
            <Divider />
            <Search />
            <Divider />
            <Chats />
        </div>
    )
}

export default Sidebar;