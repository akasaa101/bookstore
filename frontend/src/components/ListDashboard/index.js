import React from 'react';
import { Box, Typography } from "@mui/material"
import ListView from '../ListView';
const ListDashboard = () => {
    return (
        <Box sx={{backgroundColor: 'white', height:'90%', width:'100%', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems:'center'}}>
            <Box sx={{m:2}}>
                <Typography variant='h4'>Son Eklenen Kitaplar</Typography>
            </Box>
            <Box sx={{m:1, width: '90%'}}>
                <ListView />
            </Box>
        </Box>  
    )
}

export default ListDashboard