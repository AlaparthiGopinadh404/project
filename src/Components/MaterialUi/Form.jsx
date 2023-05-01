import { Box, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Form() {
    const [data,setData]= useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const handleChange =({target:{name,value}})=>{
        let updatedata={...data}
        updatedata[name]=value;
        setData(updatedata)
    }
    const handlesubmit =(e)=>{
       e.preventDefault();
       if(data.password=== data.confirmpassword){
        console.log('registered sucessfully')
       }
       else{
        console.log('password are same')
       }
       console.log("target",e.target.value)
    }
    
    
  return (
    <form onSubmit={handlesubmit}>
    <Box sx={{width:'100%',maxWidth:500}}>
        <Typography variant='h1' gutterBottom>
            Register
        </Typography>
        <TextField 
           required
           id="outlined-required"
           label="Name"
           defaultValue=""
           fullWidth    
           sx={{margin:2}} 
           name="name"  
           onChange={handleChange}
            />
        <TextField 
           required
           id="outlined-required"
           label="Email"
           type='Email'
           name="Email"
           defaultValue=""
           fullWidth
           sx={{margin:2}} 
           onChange={handleChange} 
        />
        <TextField 
           required
           id="outlined-required"
           label="Password"
           type="password"
           name="password"
           defaultValue=""
           fullWidth
           sx={{margin:2}} 
           onChange={handleChange} 
        />
        <TextField 
           required
           id="outlined-required"
           label="Password"
           name="confirmpassword"
           type="confirmpassword"
           defaultValue=""
           fullWidth
           sx={{margin:2}}  
           onChange={handleChange}
        />
        <Box sx={{textAlign:'left', margin:1}}>
        <Checkbox {...label} defaultChecked/>
        <Typography variant='caption' gutterBottom>
            Accept Terms and Conditions
        </Typography>
        </Box>
        <Button variant='contained'sx={{margin:1}} type="submit" fullWidth>Register</Button>
    </Box>
    </form>
  )
}

export default Form