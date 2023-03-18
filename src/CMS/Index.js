import { Box } from '@mui/system'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useEffect, useState } from 'react'
import Events from './EventHandler'
import Notifications from './NotifyHandler'
import Testimonials from './TestemonialHandler'
import Downloads from './DownloadHandler'
import Users from './Users'
import './styles.css'
import { Avatar, Typography, Tooltip } from '@mui/material';
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast/Toast';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import Files from './Files';

function TabPanel(props) {
    const { children, value, index, ...other } = props;


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Index = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])


    const transition = {
        duration: 0.3,
        ease: 'easeOut',
    };

    const variants = {
        enter: {
            x: '-100%',
            opacity: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            transition,
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition,
        },
    };

    const navigate = useNavigate();
    const HandHomeButton = () => {
        navigate('/Home')
    }

    const HandleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/Home')
        Toast({ type: 'success', message: `You have been successfully logged out. Have a great day!` });

    }

    return (
        <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="master-container" >
            <ToastContainer />
            <Box className="main-container">
                <Box className="navigation">
                    <Box sx={{
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        backgroundColor: "#f3f3b6"
                    }}>
                        <ToastContainer />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar
                                sx={{ width: '60px', height: '60px' }}
                                src="/"
                                alt={user.firstName}
                            />
                            <Typography variant="h6">
                                {user.firstName}
                            </Typography>
                        </Box>
                        <Tooltip title="Home">
                            <iconButton onClick={HandHomeButton}>
                                <HomeIcon />
                            </iconButton>
                        </Tooltip>
                        <Tooltip title="Logout">
                            <iconButton onClick={HandleLogout}>
                                <LogoutIcon />
                            </iconButton>
                        </Tooltip>
                    </Box>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Notifications" {...a11yProps(1)} />
                        <Tab label="Events" {...a11yProps(2)} />
                        <Tab label="Downloads" {...a11yProps(3)} />
                        <Tab label="Testemonials" {...a11yProps(4)} />
                        <Tab label="Users" {...a11yProps(5)} />
                        <Tab label="Images" {...a11yProps(6)} />
                    </Tabs>
                </Box>
                <Box className="container">
                    <TabPanel className="table-panel" value={value} index={0}>
                        <h1>Working on it... </h1>
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={1}>
                        <Notifications />
                    </TabPanel >
                    <TabPanel className="table-panel" value={value} index={2}>
                        <Events />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={3}>
                        <Downloads />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={4}>
                        <Testimonials />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={5}>
                        <Users />
                    </TabPanel>
                    <TabPanel className="table-panel" value={value} index={6}>
                        <Files />
                    </TabPanel>
                </Box>
            </Box>
        </motion.div >
    )
}

export default Index

