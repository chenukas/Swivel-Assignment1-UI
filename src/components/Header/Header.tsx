import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <><Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#9f2df7' }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Employee Manager
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box></>
    )
}

export default Header;