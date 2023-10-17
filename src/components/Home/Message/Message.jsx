import React, { useContext, useEffect, useRef } from 'react'
import useStyles from './styles';
import { Avatar } from '@mui/material';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';
import { Box } from '@mui/material';
const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message]);
    const classes = useStyles();
    const isOwner = (message.senderId === currentUser.uid);
    return (
        <div ref={ref}>
            {message.text && (
                <div className={`${classes.msg} ${isOwner ? classes.ownerMessage : classes.receiverMessage}`}>
                    <Avatar sx={{ width: 30, height: 30 }} alt="" src={
                        isOwner ? currentUser.photoURL : data.user.photoURL
                    } />
                    &nbsp;
                    {message.text}
                </div>
            )}
            {message.img && <div className={`${classes.msg} ${isOwner ? classes.ownerMessage : classes.receiverMessage}`}>
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundImage: `url(${message.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                        border: '3px solid black',
                    }}
                />
            </div>}
        </div>
    )
}

export default Message;
