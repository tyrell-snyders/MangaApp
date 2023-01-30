import React from 'react'
import { AppBar, Toolbar, CssBaseline, Typography, useTheme } from '@mui/material'
import { Link } from "react-router-dom"

const Header = () => {
    const theme = useTheme()
    return (
        <>
            <Typography color="primary">Hello There</Typography>
        </>
    )
}

export default Header