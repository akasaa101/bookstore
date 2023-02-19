import React from 'react';
import { Box, Typography } from "@mui/material"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Dashboard = () => {
    return (
        <Box sx={{flex: 1, backgroundColor: 'white'}}>
                <Box sx={{display: 'flex', flexDirection:'coloumn', justifyContent: 'center', alignItems: 'center', height: 160}}>
                    <Box sx={{display: 'flex', m:1}}>
                        <LocalLibraryIcon sx={{fontSize: 44, color: '#eccc68'}}/>
                    </Box>
                    <Box sx={{display:'flex', m:1}}>
                        <Typography sx={{color: '#eccc68', fontSize:30, textShadow: '0px 0px 1px #d35400, 0px 0px 1px #d35400, 0px 0px 1px #d35400, 0px 0px 1px #d35400',}}>Book & Author App</Typography>
                    </Box>
                </Box>
                <Box sx={{p:2}}>
                    <Box sx={{width: '100%', justifyContent:'center', display: 'flex', height:80}}>
                        <Typography variant='h4'>Dashboard</Typography>
                    </Box>
                    <Box sx={{m:1, display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#ecf0f1', height: 100, justifyContent: 'center', borderRadius:2}}>
                        <Box sx={{p: 1, backgroundColor: '#ffeaa7', borderRadius: 20, width:'90%', justifyContent: 'center', alignItems:'center', display: 'flex' }}>
                            <Typography>Son eklenen kitaplar</Typography>
                        </Box>
                        <Box sx={{p: 1, borderRadius: 20, width:'90%', justifyContent: 'center', alignItems:'center', display: 'flex' }}>
                            <Typography>Son eklenen yazarlar</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
    )
}

export default Dashboard