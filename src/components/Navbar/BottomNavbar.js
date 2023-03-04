import React, { useEffect, useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Box, Button, Drawer } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactPageIcon from '@mui/icons-material/ContactPage';
// import CourcesIcon from '../../assets/book.png'
// import AdmissionIcon from '../../assets/admission.png'
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation } from 'react-router-dom';




const BottomNavbar = () => {

    const location = useLocation();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [elementsToShow, setElementsToShow] = useState(8);
    const [value, setValue] = useState('Home');

    useEffect(() => {
        const path = location.pathname.substring(1);
        setValue(path || 'Home');
    }, [location]);

    const styles = {
        zIndex: '99999999',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: 'flex', md: 'none' },
        width: '350px',
        flexWrap: 'wrap',

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const bottomNavigationElements = [
        { label: "Home", value: "Home", icon: <HomeIcon /> },
        { label: "Notifications", value: "Notifications", icon: <NotificationsIcon /> },
        { label: "Downloads", value: "Downloads", icon: <DownloadIcon /> },
        { label: "Events", value: "Events", icon: <EmojiEventsIcon /> },
        { label: "Contact", value: "Contact", icon: <ContactPageIcon /> },
        { label: "About", value: "About", icon: <InfoIcon /> },
        // { label: "Admission", value: "Admission", icon: <img src={AdmissionIcon} width='25px' alt='' /> },
        // { label: "Courses", value: "Courses", icon: <img src={CourcesIcon} width='25px' alt='' /> },
    ];

    return (

        <Box sx={styles}>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                variant="permanent"
                anchor="bottom"
            >
                {elementsToShow < bottomNavigationElements.length && (
                    <Button onClick={() => setElementsToShow(bottomNavigationElements.length)}><ExpandMoreIcon sx={{ transform: "rotate(180deg)" }} /></Button>
                )}

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                    sx={{
                        width: '98%',
                        height: 'auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        rowGap: '5px',
                        padding: '5px'
                    }}>
                    {bottomNavigationElements.slice(0, elementsToShow).map((element, index) => (
                        <BottomNavigationAction
                            key={index}
                            label={element.label}
                            value={element.value}
                            icon={element.icon}
                            component={Link}
                            to={`/${element.value}`}
                            sx={{
                                width: '25%',
                                '@media (min-width: 600px)': {
                                    width: 'auto',
                                },
                            }}
                            onClick={() => {
                                setElementsToShow();
                            }}
                        />
                    ))}
                </BottomNavigation>
            </Drawer>
        </Box >
    );
}


export default BottomNavbar;