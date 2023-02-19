import React from 'react';
import { Box, Typography } from "@mui/material"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const UserMenuBar = () => {
    return (
        <Box sx={{width: '100%', backgroundColor: '#eccc68', flex:1, borderRadius: 2, display: 'flex'}}>
            <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', width: 180, justifyContent: 'center', paddingLeft: 5}}>
                <Typography sx={{fontWeight: 800 }}>Name Surname</Typography>
                <Typography>@username</Typography>
            </Box>
            <Box sx={{width: '100%',alignItems: 'center', display: 'flex', justifyContent: 'flex-end'}}>
                <Box sx={{display: 'flex'}}>
                    <ExitToAppIcon sx={{fontSize: 36, paddingRight: 5}} />
                </Box>
            </Box>
        </Box>
    )
}

export default UserMenuBar