import React from 'react'
import useStyles from './styles';
import { Avatar } from '@mui/material';
const Message = () => {
    const classes = useStyles();
    return (
        <>
                <div className={classes.msg}>
                    <Avatar sx={{ width: 30, height: 30 }} alt="Semy Sharp" src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4a28b9f98b99984e/641cc85f73a6bb6c4d25f0f6/Cristiano_Ronaldo_Portugal_2023.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
                    &nbsp; Arey bhai kya bakchodi kar raha hai
                </div>
        </>
    )
}

export default Message