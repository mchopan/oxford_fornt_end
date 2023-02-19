import React, { useEffect, useMemo, useState } from 'react'
import { AppBar, Toolbar, Button, Box, Tabs, Tab, useMediaQuery, useTheme, } from '@mui/material'
// import DrawerComp from './DrawerComp';
// import logo from '../../assets/Logo1.svg'
import logo1 from '../../assets/Group 1.svg'
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

    const location = useLocation();

    const [value, setValue] = useState(0);


    const pages = useMemo(() => ["Home", "Notifications", "Downloads", "Events", "Contact", "About"], []);



    useEffect(() => {
        const path = location.pathname.substring(1);
        const index = pages.indexOf(path);
        setValue(index >= 0 ? index : 0);
    }, [location, pages]);


    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const handleTabs = (event, newValue) => {
        setValue(newValue);
    }

    // styling 
    const tabSX = {
        transition: "all 0.5s ease-in",
        "&:hover": {
            borderTop: "2px solid black",
            letterSpacing: "1px"
        }
    }

    // FF5722 orange color 

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'
                sx={{
                    backgroundColor: "#FAF9F6",
                    color: 'black',
                    height: '100px',
                }}>
                <Toolbar sx={{ height: '100px', }}>
                    {
                        isMatch ? (
                            <>
                                <img src={logo1} alt="logo" width='360px' />
                                {/* <img src={textLogoSm} alt="textlogo" width="100%" /> */}
                                {/* <DrawerComp /> */}
                            </>
                        ) : (
                            <>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%', margin: 'auto' }}>
                                    <img sx={{ marginLeft: "auto" }} src={logo1} alt="logo" width='500px' />
                                </Box>
                                <Tabs sx={{ marginLeft: "auto", display: 'flex', alignItems: 'center' }} value={value}
                                    textColor='inherit'
                                    onChange={handleTabs}
                                    indicatorColor="secondary"
                                >
                                    {
                                        pages.map((page, index) => (
                                            <Tab
                                                sx={tabSX} key={index} label={page}
                                                component={Link}
                                                to={`/${page}`}
                                            />
                                        ))
                                    }
                                </Tabs>
                                <Button
                                    sx={{ marginLeft: "auto" }}
                                    variant='contained'
                                >
                                    Login
                                </Button>
                            </>
                        )
                    }

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar