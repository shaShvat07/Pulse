import React, { useContext, useEffect } from 'react'
import Box from '@mui/material/Box';
import useStyles from './styles';
import { Message } from '../index.js';
import { ChatContext } from '../../../context/ChatContext';
import { onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useState } from 'react';
import { doc } from 'firebase/firestore';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const Chatbox = () => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
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
  const [prevMessagesLength, setPrevMessagesLength] = useState(messages.length);
  useEffect(() => {
    if (messages.length > prevMessagesLength) {
      const latestMessage = messages[messages.length - 1];
      if (latestMessage.senderId !== currentUser.uid) {
        showNotification();
      }
      setPrevMessagesLength(messages.length);
    }
  }, [messages, currentUser]);
  const classes = useStyles();

  const showNotification = () => {
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} ${classes.customToastContainer}`}>
        <div className={classes.customToastContent}>
            <div className={classes.customToastImage}>
              <img
                className={classes.customToastImage}
                src={data.user.photoURL}
                alt=""
              />
            </div>
            <div className={classes.customToastTextContainer}>
              <p className={classes.customToastName}>
                {data.user.displayName}
              </p>
              <p className={classes.customToastMessage}>
                {messages[messages.length - 1].text}
              </p>
            </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className={`${classes.customToastCloseButton} border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          >
            Close
          </button>
        </div>
      </div>
    ));
  };
  return (
    <>
      <Box className={classes.chat}>
        {messages.length > 0 ? (
          messages.map((m) => (
            <Message message={m} key={m.id} />
          ))
        ) : (
          <div>No messages available</div>
        )}
      </Box>
    </>
  );
};

export default Chatbox;