import React from 'react';
import { Box, Typography } from "@mui/material"
import Dashboard from '../components/dashboard';
import UserMenuBar from '../components/userMenuBar';
import ListDashboard from '../components/ListDashboard';
const Home = () => {
    return (
        <Box sx={{display: 'flex', backgroundColor: '#f1f2f6', width: '100%', height:'100vh', flexDirection: 'row'}}>
            <Dashboard/>
            <Box sx={{flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', p:5}}>
                <UserMenuBar/>
                <Box sx={{width: '100%', flex: 8, justifyContent: 'center', display: 'flex', alignItems:'center', flexDirection: 'column'}}>
                    <ListDashboard/>
                </Box>
            </Box>
        </Box>
    )
}

export default Home;