import React from 'react';
import { Box, Typography } from "@mui/material"
import theme from '../theme';
import { AuthForm } from '../components';
const Auth = () => {
    return (
        <Box sx={{width: '100%', height: '100vh', bgcolor: theme.palette.primary.main, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <AuthForm/>
        </Box>
    )
}

export default Auth;