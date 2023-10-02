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
import Search from '../Search';
import { blue, pink } from '@mui/material/colors';

const friends = ['Arushi', 'Zaina', 'Anisha']
const Sidebar = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.navbarP}>
            <div className={classes.combine}>
            <Toolbar className={classes.signOutButton}>
                <Typography variant="h6" noWrap component="div">
                    Shashvat Patel
                </Typography>
            </Toolbar>
            <Toolbar className={classes.signOutButton}>
                <Button size="medium" color="error" variant="contained">Sign Out</Button>
            </Toolbar>
            </div>
            </div>
            <Divider />
            <Search />
            <Divider />
            <List>
                {friends.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {index % 2 === 0 ? <Avatar sx={{ bgcolor: blue[500] }}>{friends[index][0]}</Avatar>
                                : <Avatar sx={{ bgcolor: pink[500] }}>{friends[index][0]}</Avatar>}
                            &nbsp;
                            &nbsp;
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {friends.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {
                                index % 2 === 0 ? <Avatar sx={{ bgcolor: blue[500] }}>{friends[index][0]}</Avatar>
                                    : <Avatar sx={{ bgcolor: pink[500] }}>{friends[index][0]}</Avatar>
                            }
                            &nbsp;
                            &nbsp;
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Sidebar;