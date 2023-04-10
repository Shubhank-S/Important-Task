import React from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

function Header() {
    return (
        // Navbar
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4">
                        React Demo
                    </Typography>
                    <Box display={'flex'} marginLeft="auto" >
                        <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/converter">CONVERTER</Button>
                        <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/todo-list">TODO LIST</Button>
                        <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/sign-up">SIGNUP</Button>
                        <Button sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/login">LOGIN</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header;