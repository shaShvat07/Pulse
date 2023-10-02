import React from 'react'
import { TextField } from '@mui/material'
import useStyles from './styles';

const Input = () => {
    const classes = useStyles();
    return (
        <div className={classes.inp}>
            <TextField fullWidth label="Write your message here" id="fullWidth" />
        </div>
    )
}

export default Input;