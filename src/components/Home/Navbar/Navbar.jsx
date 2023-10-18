import React from 'react'
import { Typography, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ChatContext } from '../../../context/ChatContext';
import { useContext } from 'react';
const Navbar = () => {
  const { data } = useContext(ChatContext);
  const check = data.chatId;
  return (
    <>
      {
        check ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: blue[500] }} src={data.user.photoURL} />
            &nbsp;&nbsp;
            <Typography variant="h6" noWrap component="div">
              {data.user?.displayName}
            </Typography>
          </div>
        ) : (
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Typography variant="h6" noWrap component="div">
              Pulse
            </Typography>
          </div>
        )
      }
    </>
  )
}

export default Navbar;