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

const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
  
    useEffect(() => {
      const getChats = () => {
        const unSub = onSnapshot(doc(db , "userChats", currentUser.uid), (doc) => {
          setChats(doc.data());
        });
  
        return () => {
          unSub();
        }
      };
  
     currentUser.uid && getChats();
    }, [currentUser.uid]);
  
    return (
        <List>
            {Object.entries(chats)?.map((chat) => (
                <ListItem key={chat[0]} disablePadding>
                    <ListItemButton>
                        {
                            <Avatar src={chat[1].userInfo.photoURL} alt="" />
                        }
                        &nbsp;
                        &nbsp;
                        <ListItemText primary={chat[1].userInfo.displayName} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

export default Chats;