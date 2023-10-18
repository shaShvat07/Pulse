import React from 'react';
import useStyles from './styles';
import { Typography } from '@mui/material';
const Users = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.chat}>
                <Typography style={{
                    fontSize: 60,
                    background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    webkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Welcome to Pulse Chat!
                </Typography>
            </div>
        </>
    )
}

export default Users