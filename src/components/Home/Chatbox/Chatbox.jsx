import React from 'react'
import Box  from '@mui/material/Box';
import useStyles from './styles';
import { Message } from '../index.js';

const Chatbox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.chat}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Box>
  )
};

export default Chatbox;