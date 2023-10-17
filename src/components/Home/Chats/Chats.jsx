import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Avatar } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import { onSnapshot } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';
import { db } from '../../../firebase';
import { useEffect } from 'react';
import { ChatContext } from '../../../context/ChatContext';
import { Button } from '@mui/material';
import { Typography } from '@mui/material'; // Added Typography component
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unSub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unSub();
      }
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
  }

  return (
    <List>
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <ListItem key={chat[0]} disablePadding>
          <ListItemButton>
            <Button
              fullWidth
              variant="text"
              style={{ textTransform: 'none' }}
              onClick={() => handleSelect(chat[1].userInfo)}
            >
              <Avatar src={chat[1].userInfo.photoURL} alt="" />
              <div style={{ marginLeft: '10px' }}>
                <Typography variant="body1" color="textPrimary"> {/* Added Typography component */}
                  {chat[1].userInfo.displayName}
                </Typography>
                <div> {chat[1].lastMessage} </div>
              </div>
            </Button>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default Chats;