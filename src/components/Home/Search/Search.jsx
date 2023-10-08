import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";
import { TextField, Button, Alert, Avatar, Typography } from "@mui/material"; // Importing MUI components
import useStyles from './styles';

const Search = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        const res1 = await getDoc(doc(db, "userChats", currentUser.uid));

        //create user chats
        if (!res1.exists()) {
          await setDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId]: {
              userInfo: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
              date: serverTimestamp()
            }
          });
        }
        else {
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId]: {
              userInfo: {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
              },
              date: serverTimestamp()
            }
          });
        }
        const res2 = await getDoc(doc(db, "userChats", user.uid));

        if (!res2.exists()) {
          await setDoc(doc(db, "userChats", user.uid), {
            [combinedId]: {
              userInfo: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              date: serverTimestamp()
            }
          });
        }
        else {
          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId]: {
              userInfo: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
              },
              date: serverTimestamp()
            }
          });
        }
      }
    } catch (err) { }

    setUser(null);
    setUsername("")
  };

  return (
    <div className="search">
      <div className={classes.searchForm}>
        <TextField
          label="Find a user"
          variant="outlined"
          value={username}
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          className={classes.sbox}
        />
        <Button variant="contained" onClick={handleSearch} className={classes.sex}>
          Search
        </Button>
      </div>
      {err && <Alert severity="error">User not found!</Alert>}
      {user && (
        <Button sx={{ width: '85%', display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '10px' }} onClick={handleSelect} color="secondary" variant="outlined">
          <Avatar alt="" src={user.photoURL} />
          &nbsp;
          &nbsp;
          <Typography>  {user.displayName} </Typography>
        </Button>
      )}
    </div>
  );
};

export default Search;
