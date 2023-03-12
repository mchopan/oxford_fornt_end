import React, { useEffect, useMemo, useState } from 'react'
import { AppBar, Toolbar, Button, Box, Tabs, Tab, useMediaQuery, useTheme, Dialog, DialogTitle, DialogContent, TextField, DialogActions, } from '@mui/material'
// import DrawerComp from './DrawerComp';
// import logo from '../../assets/Logo1.svg'
import logo1 from '../../assets/Group 1.svg'
import { Link, useLocation } from 'react-router-dom';
import Toast from '../Toast/Toast';
import User from '../../modules/User/User';
import { ToastContainer } from 'react-toastify';
import userDetails from '../../modules/User/userDetails';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const [newData, setNewData] = useState({
        userName: '',
        password: '',
    });
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
    };

    // Handle Dialoge
    const handleClickOpen = () => {
        if (userDetails.getUserDetails()) {
            navigate('/admin')
        }
        else {
            setOpen(true)
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        User.login(newData, response => {
            if (response.status === 'success') {
                userDetails.setUserDetails(JSON.stringify(response.data));
                Toast({ type: 'success', message: `Login successful! Welcome back ${response.data.userName}!` });
                navigate('/admin')
                console.log('Login successful!:', response.data);
            } else {
                Toast({ type: 'error', message: `Error occoured while login` });
                console.error('Error occoured while login', response.error);
            }
        })
        setOpen(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ToastContainer />
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
                                    onClick={handleClickOpen}
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
            {/* Dialouge To add new data */}
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <form>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setNewData({ ...newData, userName: e.target.value })}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setNewData({ ...newData, password: e.target.value })}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleLogin}>Login</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box >
        // </Box >
    )
}

export default Navbar