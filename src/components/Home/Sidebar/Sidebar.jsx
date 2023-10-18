import * as React from 'react';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import useStyles from './styles';
import { Search } from '../index';
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.js";
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from "react";
import { Chats } from '../index';
import { ChatContext } from '../../../context/ChatContext';
import toast from 'react-hot-toast';
const Sidebar = ( {handleDrawerToggle} ) => {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
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
                        <Button onClick={() => {
                            signOut(auth);
                            toast.success("Signed Out Successfully");
                            }} size="medium" color="error" variant="contained">Sign Out</Button>
                    </Toolbar>
                </div>
            </div>
            <Divider />
            <Search handleDrawerToggle={handleDrawerToggle} />
            <Divider />
            <Chats handleDrawerToggle={handleDrawerToggle} />
        </div>
    )
}

export default Sidebar;