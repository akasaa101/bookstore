import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"

const AuthForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        // TODO
        alert(userName + password)
    }

    return (
        <Box sx={{width: 300, height: 300, border: 1, borderRadius: 4, display: 'flex', flexDirection: 'column', p:2, alignItems: 'center', borderColor:'#f2b705'}}>
            <Box sx={{flex:1, display: 'flex'}}>
                <Typography color="primary" variant="h5" sx={{m:2}}>Wellcome</Typography>
            </Box>
            <Box sx={{flex: 2, display: 'flex', flexDirection:'column', justifyContent: 'center', width: '90%'}}>
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
            </Box>
            <Box sx={{flex: 2, display: 'flex', flexDirection:'column', justifyContent: 'center',width: '90%'}}>
                <Button onClick={handleLogin} variant="contained" sx={{m:1}}>
                    Sign-In
                </Button>
                <Typography sx={{color: '#636e72', m:1}}>Not have an account. Create Here.</Typography>
            </Box>
        </Box>
    )
}
export default AuthForm