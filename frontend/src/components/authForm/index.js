import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material"

const AuthForm = () => {
    return (
        <Box sx={{width: 300, height: 300, border: 1, borderRadius: 4, display: 'flex', flexDirection: 'column', p:2, alignItems: 'center'}}>
            <Typography variant="h5" sx={{m:2}}>Book</Typography>
            <TextField id="outlined-basic" label="Username" variant="outlined" color="error"/>
            <TextField id="outlined-basic" label="Password" variant="outlined" color="error"/>
            <Box>
                <Button variant="contained" color="secondary">
                    Sign-In
                </Button>
                <Button variant="contained" color="secondary">
                    Register
                </Button>
            </Box>
        </Box>
    )
}
export default AuthForm