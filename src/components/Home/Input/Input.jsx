import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import useStyles from './styles';
import SendIcon from '@mui/icons-material/Send';
import { Grid, Fab } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';
import { useContext } from 'react';
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
    setDoc,
    getDoc,
} from '@firebase/firestore';
import { db, storage } from '../../../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Input = () => {

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        try {
            if (img) {
                const storageRef = ref(storage, uuid());
                const uploadTask = uploadBytesResumable(storageRef, img);
                uploadTask.on(
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                            if (text) {
                                await updateDoc(doc(db, "chats", data.chatId), {
                                    messages: arrayUnion({
                                        id: uuid(),
                                        text,
                                        senderId: currentUser.uid,
                                        date: Timestamp.now(),
                                        img: url,
                                    }),
                                });
                            } else {
                                await updateDoc(doc(db, "chats", data.chatId), {
                                    messages: arrayUnion({
                                        id: uuid(),
                                        senderId: currentUser.uid,
                                        date: Timestamp.now(),
                                        img: url,
                                    }),
                                });
                            }

                        });
                    }
                );
            }
            else {
                if (text) {
                    await updateDoc(doc(db, "chats", data.chatId), {
                        messages: arrayUnion({
                            id: uuid(),
                            text,
                            senderId: currentUser.uid,
                            date: Timestamp.now(),
                        }),
                    });
                }
            }
            const chatDocRef = doc(db, "userChats", currentUser.uid);
            if (text) {
                await setDoc(chatDocRef, {
                    [data.chatId]: {
                        lastMessage: text,
                        date: serverTimestamp(),
                    },
                }, { merge: true });
                const chatDoc2Ref = doc(db, "userChats", data.user.uid);
                await setDoc(chatDoc2Ref, {
                    [data.chatId]: {
                        lastMessage: text,
                        date: serverTimestamp(),
                    },
                }, { merge: true });
            } else {
                if (img) {
                    await setDoc(chatDocRef, {
                        [data.chatId]: {
                            lastMessage: "Image",
                            date: serverTimestamp(),
                        },
                    }, { merge: true });
                    const chatDoc2Ref = doc(db, "userChats", data.user.uid);
                    await setDoc(chatDoc2Ref, {
                        [data.chatId]: {
                            lastMessage: "Image",
                            date: serverTimestamp(),
                        },
                    }, { merge: true });
                }
            }
        }
        catch (err) {

        }
        setTimeout(() => {
            setText("");
            setImg(null);
        }, 0);
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSend();
    };

    const classes = useStyles();
    const isMobile = (window.innerWidth <= 768);
    return (
        <>
            {!isMobile ? (
                <Grid container style={{ padding: '10px' }} >
                    <Grid item xs={10} >
                        <TextField type="text" value={text} onKeyDown={handleKey} onChange={(e) => setText(e.target.value)} id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid item xs={1} style={{ marginLeft: '10px' }} >
                        <Fab component="label" variant="contained" color="primary" >
                            <VisuallyHiddenInput type="file" id="file" onChange={(e) => setImg(e.target.files[0])} />
                            <CloudUploadIcon />
                        </Fab>
                    </Grid>
                    <Grid item xs={1} style={{ marginLeft: '-10px' }} >
                        <Fab color="primary" aria-label="add" onClick={handleSend}><SendIcon /></Fab>
                    </Grid>
                </Grid >
            ) : (
                <Grid container style={{ padding: '10px' }} >
                    <Grid item xs={9} style={{ marginLeft: '-25px' }}>
                        <TextField type="text" value={text} onKeyDown={handleKey} onChange={(e) => setText(e.target.value)} id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid item xs={1} style={{ marginLeft: '10px' }}>
                        <Fab component="label" variant="contained" color="primary" >
                            <VisuallyHiddenInput type="file" id="file" onChange={(e) => setImg(e.target.files[0])} />
                            <CloudUploadIcon />
                        </Fab>
                    </Grid>
                    <Grid item xs={1} style={{ marginLeft: '38px' }}>
                        <Fab color="primary" aria-label="add" onClick={handleSend}><SendIcon /></Fab>
                    </Grid>
                </Grid >
            )
            }
        </>
    )
}

export default Input;
