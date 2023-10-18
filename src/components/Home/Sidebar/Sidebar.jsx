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
const Sidebar = () => {
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const check = data.chatId;
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