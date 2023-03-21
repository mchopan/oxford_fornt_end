import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { List, Typography } from '@mui/material';
import Notification from '../../modules/Notification/index'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Events from '../../modules/Events';
import { useNavigate } from 'react-router-dom';
import Loader from '../../assets/Loader/loader'
import NoResult from '../../assets/Illustrations/Empty Box.svg'

import './style.css'

const NdeTabs = () => {

    const navigate = useNavigate();

    SwiperCore.use([Autoplay]);

    const [loader, setLoader] = useState(false)

    const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const currentTime = new Date();

    // Tab values
    const [value, setValue] = useState('1');
    // Notifications
    const [notifications, setNotifications] = useState([]);
    const [events, setEvents] = useState([])
    const [downloads, setDownloads] = useState([])
    // handle tab change 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        getAllNotifications();
        getAllEvents();
    }, [])
    // Nitifications
    const getAllNotifications = () => {
        setLoader(true)
        Notification.getAllNotifications(response => {
            console.log(response)
            if (response.status === 'success') {
                setLoader(false)
                setNotifications(response.data.notifications);
            }
            else {
                setLoader(false)
                setNotifications([]);
            }
        })
    }

    // Downloads


    // TEvents
    const getAllEvents = () => {
        Events.getAllEvents(response => {
            if (response.status === 'success') {
                setEvents(response.data.events)
            }
            else {
                setEvents([]);
            }
        })
    }

    const handleMouseEnter = () => {
        // Disable autoplay on hover
        SwiperCore.use([Autoplay]).disable();
    };

    const handleMouseLeave = () => {
        // Enable autoplay when mouse leaves
        SwiperCore.use([Autoplay]).enable();
    };

    //animation on changing the tab
    const boxAnimation = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: { ease: "easeOut", duration: 0.5 }
        }
    }

    const navigateNotify = (e, id) => {
        e.preventDefault();
        console.log(id);
        navigate(`/Notifications`);
    }


    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1', overflow: 'hidden' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            variant='fullWidth'
                        >
                            <Tab label="Notifications" value="1" />
                            <Tab label="Downloads" value="2" />
                            <Tab label="Events" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        {
                            loader ? <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}><Loader /></Box>
                                :
                                <Box sx={{ maxHeight: '570px', }}>
                                    {
                                        notifications.length > 0 ? (
                                            <>
                                                <Swiper
                                                    direction={"vertical"}
                                                    slidesPerView={7}
                                                    loop={true}
                                                    allowTouchMove={false}
                                                    autoplay={{
                                                        delay: 1000,
                                                        disableOnInteraction: true // Disable autoplay on interaction
                                                    }}
                                                    modules={[Autoplay]}
                                                    style={{ maxHeight: '570px' }}
                                                    onMouseEnter={handleMouseEnter} // Call handleMouseEnter on mouse enter
                                                    onMouseLeave={handleMouseLeave} // Call handleMouseLeave on mouse leave
                                                >

                                                    {
                                                        notifications?.slice(0, 10).map((item, index) => {
                                                            return (
                                                                <SwiperSlide>
                                                                    <motion.div
                                                                        whileHover={{ scale: 1 }}
                                                                        whileTap={{ scale: 0.9 }}
                                                                        variants={boxAnimation}
                                                                        initial="initial"
                                                                        animate="animate"
                                                                    >
                                                                        <List
                                                                            onClick={(e) => { navigateNotify(e, notifications._id) }}
                                                                            key={item._id}
                                                                            sx={{
                                                                                color: 'red',
                                                                                cursor: 'pointer',
                                                                                margin: '5px',
                                                                                padding: '5px',
                                                                                boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                                                            }}
                                                                        >
                                                                            {currentTime.getTime() - new Date(item.createdAt).getTime() < 86400000 && (
                                                                                <div style={{ position: 'absolute', width: '98%', textAlign: 'center', padding: '5px', color: 'white' }}>
                                                                                    <div style={{ backgroundColor: 'red', width: '30px', margin: 'auto', fontWeight: '500', fontSize: '9px', borderRadius: '10px' }}>
                                                                                        New
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                            <Typography variant="overline" color="#918484" sx={{ display: 'flex', justifyContent: 'space-between', lineHeight: '1.5' }} >
                                                                                {item.notiName}
                                                                                <Typography variant="caption">
                                                                                    {new Date(item.createdAt).toLocaleString('en-IN', {
                                                                                        day: 'numeric',
                                                                                        month: 'short',
                                                                                        year: 'numeric',
                                                                                        hour: 'numeric',
                                                                                        minute: 'numeric',
                                                                                    })}
                                                                                </Typography>
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body1"
                                                                                color="#000000"
                                                                                sx={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis'
                                                                                }}>
                                                                                {item.notiDesc}
                                                                            </Typography>

                                                                        </List>
                                                                    </motion.div>
                                                                </SwiperSlide>
                                                            )
                                                        })
                                                    }
                                                </Swiper>
                                            </>
                                        ) : (
                                            <Box sx={{ width: "100%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <img src={NoResult} width="200px" alt="No result" />
                                            </Box>
                                        )
                                    }
                                </Box>
                        }
                    </TabPanel>

                    <TabPanel value="2">

                        {
                            loader ? <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}><Loader /></Box>
                                :
                                <Box sx={{ maxHeight: '570px', }}>
                                    {
                                        downloads.length > 0 ? (
                                            <>
                                                <Swiper
                                                    direction={"vertical"}
                                                    slidesPerView={7}
                                                    loop={true}
                                                    allowTouchMove={false}
                                                    autoplay={{
                                                        delay: 1000,
                                                        disableOnInteraction: true // Disable autoplay on interaction
                                                    }}
                                                    modules={[Autoplay]}
                                                    style={{ maxHeight: '570px' }}
                                                    onMouseEnter={handleMouseEnter} // Call handleMouseEnter on mouse enter
                                                    onMouseLeave={handleMouseLeave} // Call handleMouseLeave on mouse leave
                                                >

                                                    {
                                                        notifications?.slice(0, 10).map((item, index) => {
                                                            return (
                                                                <SwiperSlide>
                                                                    <motion.div
                                                                        whileHover={{ scale: 1 }}
                                                                        whileTap={{ scale: 0.9 }}
                                                                        variants={boxAnimation}
                                                                        initial="initial"
                                                                        animate="animate"
                                                                    >
                                                                        <List
                                                                            onClick={(e) => { navigateNotify(e, notifications._id) }}
                                                                            key={item._id}
                                                                            sx={{
                                                                                color: 'red',
                                                                                cursor: 'pointer',
                                                                                margin: '5px',
                                                                                padding: '5px',
                                                                                boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                                                            }}
                                                                        >
                                                                            {currentTime.getTime() - new Date(item.createdAt).getTime() < 86400000 && (
                                                                                <div style={{ position: 'absolute', width: '98%', textAlign: 'center', padding: '5px', color: 'white' }}>
                                                                                    <div style={{ backgroundColor: 'red', width: '30px', margin: 'auto', fontWeight: '500', fontSize: '9px', borderRadius: '10px' }}>
                                                                                        New
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                            <Typography variant="overline" color="#918484" sx={{ display: 'flex', justifyContent: 'space-between', lineHeight: '1.5' }} >
                                                                                {item.notiName}
                                                                                <Typography variant="caption">
                                                                                    {new Date(item.createdAt).toLocaleString('en-IN', {
                                                                                        day: 'numeric',
                                                                                        month: 'short',
                                                                                        year: 'numeric',
                                                                                        hour: 'numeric',
                                                                                        minute: 'numeric',
                                                                                    })}
                                                                                </Typography>
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body1"
                                                                                color="#000000"
                                                                                sx={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis'
                                                                                }}>
                                                                                {item.notiDesc}
                                                                            </Typography>

                                                                        </List>
                                                                    </motion.div>
                                                                </SwiperSlide>
                                                            )
                                                        })
                                                    }
                                                </Swiper>
                                            </>
                                        ) : (
                                            <Box sx={{ width: "100%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <img src={NoResult} width="200px" alt="No result" />
                                            </Box>
                                        )
                                    }
                                </Box>
                        }

                    </TabPanel>
                    <TabPanel value="3">
                        {
                            loader ? <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}><Loader /></Box>
                                :
                                <Box sx={{ maxHeight: '570px', }}>
                                    {
                                        notifications.length > 0 ? (
                                            <>
                                                <Swiper

                                                    direction={"vertical"}
                                                    slidesPerView={6}
                                                    loop={true}
                                                    allowTouchMove={false}
                                                    autoplay={{
                                                        delay: 1000,
                                                        disableOnInteraction: true // Disable autoplay on interaction
                                                    }}
                                                    modules={[Autoplay]}
                                                    style={{ maxHeight: '570px' }}
                                                    onMouseEnter={handleMouseEnter} // Call handleMouseEnter on mouse enter
                                                    onMouseLeave={handleMouseLeave} // Call handleMouseLeave on mouse leave
                                                >

                                                    {
                                                        events?.slice(0, 10).map((item, index) => {
                                                            return (
                                                                <SwiperSlide>
                                                                    <motion.div
                                                                        whileHover={{ scale: 1 }}
                                                                        whileTap={{ scale: 0.9 }}
                                                                        variants={boxAnimation}
                                                                        initial="initial"
                                                                        animate="animate"
                                                                    >
                                                                        <List
                                                                            onClick={(e) => { navigateNotify(e, item._id) }}
                                                                            key={item._id}
                                                                            sx={{
                                                                                color: 'red',
                                                                                cursor: 'pointer',
                                                                                margin: '5px',
                                                                                padding: '5px',
                                                                                boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                                                                            }}
                                                                        >
                                                                            {currentTime.getTime() - new Date(item.createdAt).getTime() < 86400000 && (
                                                                                <div style={{ position: 'absolute', width: '98%', textAlign: 'center', padding: '5px', color: 'white' }}>
                                                                                    <div style={{ backgroundColor: 'red', width: '30px', margin: 'auto', fontWeight: '500', fontSize: '9px', borderRadius: '10px' }}>
                                                                                        New
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                            <Typography variant="overline" color="#918484" sx={{ display: 'flex', justifyContent: 'space-between', lineHeight: '1.5' }} >
                                                                                {item.eventName}
                                                                                <Typography variant="caption">
                                                                                    {new Date(item.createdAt).toLocaleString('en-IN', {
                                                                                        day: 'numeric',
                                                                                        month: 'short',
                                                                                        year: 'numeric',
                                                                                        hour: 'numeric',
                                                                                        minute: 'numeric',
                                                                                    })}
                                                                                </Typography>
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body1"
                                                                                color="#000000"
                                                                                sx={{
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis'
                                                                                }}>
                                                                                {item.eventDesc}
                                                                            </Typography>
                                                                            <Typography
                                                                                variant="body1"
                                                                                color="white"

                                                                                sx={{
                                                                                    backgroundColor: "#1976d2",
                                                                                    whiteSpace: 'nowrap',
                                                                                    overflow: 'hidden',
                                                                                    textOverflow: 'ellipsis'
                                                                                }}>
                                                                                {new Date(item.eventTime).toLocaleString('en-IN', {
                                                                                    day: 'numeric',
                                                                                    month: 'short',
                                                                                    year: 'numeric',
                                                                                })}
                                                                            </Typography>


                                                                        </List>
                                                                    </motion.div>
                                                                </SwiperSlide>
                                                            )
                                                        })
                                                    }
                                                </Swiper>
                                            </>
                                        ) : (
                                            <Box sx={{ width: "100%", height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <img src={NoResult} width="200px" alt="No result" />
                                            </Box>
                                        )
                                    }
                                </Box>
                        }
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    )
}
export default NdeTabs