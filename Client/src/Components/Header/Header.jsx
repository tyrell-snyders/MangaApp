import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Button, ListItemText, Toolbar, AppBar, CssBaseline, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const drawerWidth = 240
const navItems = ['Manhwa', 'Manga', 'Search']

const Header = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{my: 2}}>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                    Despair's Manga App
                </Link>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <ListItem key={i} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={`/${item}`} style={{textDecoration: 'none', color: 'black', textAlign: 'center'}}>
                                <ListItemText primary={item} sx={{textAlign: 'center'}} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container = window !== undefined ? window().document.body : undefined

    return (
        <>
            <Box>
                <CssBaseline />
                <AppBar component='nav'>
                    <Toolbar>
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='start'
                            onClick={handleDrawerToggle}
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
                                Despair's Manga App
                            </Link>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '10rem' }}>
                            {navItems.map((item, i) => (
                                <>
                                    <Link key={i} to={`/${item}`} style={{textDecoration: 'none'}}>
                                        <Button sx={{ color: '#fff', marginLeft: '20px' }}>
                                        {item}
                                        </Button>
                                    </Link>
                                </>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component='nav'>
                    <Drawer
                        container={container}
                        variant='temporary'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{ display: { xs: 'block', sm: 'none' }, 
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
        </>
    )
}

Header.propTypes = {
    window: PropTypes.func,
}

export default Header