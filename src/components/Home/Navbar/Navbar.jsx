import React from 'react'
import { Typography, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ChatContext } from '../../../context/ChatContext';
import { useContext } from 'react';
const Navbar = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  return (
    <>
      <Avatar sx={{ bgcolor: blue[500] }} src={data.user.photoURL}/>
      &nbsp;&nbsp;
      <Typography variant="h6" noWrap component="div">
        {data.user?.displayName}
      </Typography>
    </>
  )
}

export default Navbar;