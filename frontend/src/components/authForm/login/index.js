import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
const Login = () => {
  const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    return (
            <>
                <Box sx={{width:'100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <PersonIcon color="primary" sx={{fontSize: 100}}/>
                </Box>
                <TextField 
                    label="Username" 
                    variant="filled" 
                    sx={{m:1}}  
                    value={userName} 
                    onChange={event=>setUserName(event.target.value)} />
                <TextField 
                    label="Password" 
                    variant="filled" 
                    value={password} 
                    onChange={event=>setPassword(event.target.value)}
                    sx={{m:1}}/>
            </>
    )
}

export default Login