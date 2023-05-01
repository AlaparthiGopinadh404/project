import { Box, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    return (


        <form>
            <Box sx={{width:'100%' , maxWidth:500}}>
                <Typography variant='h1' gutterBottom>
                    Login
                </Typography>
                <TextField 
                required
                id="outlined-required"
                label="Email"
                type="Email"
                name="Email"
                />

            </Box>
        </form>


    )
}

export default Login