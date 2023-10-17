import React, { useContext, useEffect } from 'react'
import Box from '@mui/material/Box';
import useStyles from './styles';
import { Message } from '../index.js';
import { ChatContext } from '../../../context/ChatContext';
import { onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useState } from 'react';
import { doc } from 'firebase/firestore';

const Chatbox = () => {
  const { data } = useContext(ChatContext);
  console.log(data);
  const [messages, setMessages] = useState([]); useEffect(() => {
    if (data && data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => {
        unSub();
      };
    }
  }, [data]);

  if (!data || !data.chatId) {
    const classes = useStyles();
    return (
      <Box className={classes.chat}>
      </Box>
    );
  }


  const classes = useStyles();
  return (
    <Box className={classes.chat}>
      {messages.length > 0 ? (
        messages.map((m) => (
          <Message message={m} key={m.id} />
        ))
      ) : (
        <div>No messages available</div>
      )}
    </Box>
  );
};

export default Chatbox;