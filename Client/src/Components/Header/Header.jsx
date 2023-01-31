import React from 'react'
import { AppBar, Toolbar, CssBaseline, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <React.Fragment>
            <AppBar sx={{background: '#4e6973'}}>
                <Toolbar>
                    <Typography variant='h6'>Hello World</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header