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
import { Autoplay } from 'swiper';

const NdeTabs = () => {

    const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


    // Tab values
    const [value, setValue] = useState('1');
    // Notifications
    const [notifications, setNotifications] = useState([]);

    // handle tab change 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        getAllNotifications();
    }, [])

    const getAllNotifications = () => {
        Notification.getAllNotifications(response => {
            console.log(response)
            if (response.status === 'success') {
                setNotifications(response.data.notifications);
            }
            else {
                setNotifications([]);
            }
        })
    }
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
                        <Box sx={{ maxHeight: '570px' }}>
                            <Swiper
                                direction={"vertical"}
                                slidesPerView={7}
                                loop={true}
                                allowTouchMove={false}
                                autoplay={{
                                    delay: 1000,
                                    speed: 1000,
                                    pauseOnHover: true
                                }}
                                modules={[Autoplay]}
                                style={{ maxHeight: '570px' }}
                            >

                                {
                                    notifications?.map((item, index) => {
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

                                                        key={item.id}
                                                        sx={{
                                                            color: 'red',
                                                            cursor: 'pointer',
                                                            margin: '5px',
                                                            padding: '5px',
                                                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
                                                        }}
                                                    >
                                                        <Typography variant="overline" color="black" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                                            {item.notiName}
                                                            <Typography variant="caption" color="black">
                                                                {new Date(item.createdAt).toLocaleString('en-IN', {
                                                                    day: 'numeric',
                                                                    month: 'short',
                                                                    year: 'numeric',
                                                                    hour: 'numeric',
                                                                    minute: 'numeric',
                                                                })}
                                                            </Typography>
                                                        </Typography>
                                                        <Typography variant="body1" color="blue" >
                                                            {item.notiDesc}
                                                        </Typography>
                                                    </List>
                                                </motion.div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Box>
                    </TabPanel>

                    <TabPanel value="2">

                        <Box sx={{ maxHeight: '570px' }}>
                            <Swiper
                                direction={"vertical"}
                                slidesPerView={7}
                                loop={true}
                                allowTouchMove={false}
                                autoplay={{
                                    delay: 1000,
                                    speed: 1000,
                                    pauseOnHover: true
                                }}
                                modules={[Autoplay]}
                                style={{ maxHeight: '570px' }}
                            >
                                {
                                    arrays.map((item, index) => {
                                        return (
                                            <SwiperSlide>
                                                <motion.div
                                                    whileHover={{ scale: 1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    variants={boxAnimation}
                                                    initial={'initial'}
                                                    animate={'animate'}
                                                >
                                                    <List
                                                        key={item.id}
                                                        sx={{
                                                            color: 'red',
                                                            cursor: 'pointer',
                                                            margin: '5px',
                                                            padding: '5px',
                                                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
                                                        }}
                                                    >
                                                        <Typography variant="body1" color="black" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                                            File Name
                                                            <Typography variant="caption" color="black">
                                                                {/* {item.localDateTime} */}
                                                                Uploaded:  12/04/2023
                                                            </Typography>
                                                        </Typography>
                                                        <Typography variant="overline" color="blue" >
                                                            Download File
                                                        </Typography>
                                                    </List>
                                                </motion.div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Box>

                    </TabPanel>
                    <TabPanel value="3">
                        <Box sx={{ maxHeight: '570px' }}>
                            <Swiper
                                direction={"vertical"}
                                slidesPerView={7}
                                loop={true}
                                allowTouchMove={false}
                                autoplay={{
                                    delay: 1000,
                                    speed: 1000,
                                    pauseOnHover: true
                                }}
                                modules={[Autoplay]}
                                style={{ maxHeight: '570px' }}
                            >
                                {
                                    arrays.map((item, index) => {
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
                                                        key={item.id}
                                                        sx={{
                                                            color: 'red',
                                                            cursor: 'pointer',
                                                            margin: '5px',
                                                            padding: '5px',
                                                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
                                                        }}
                                                    >
                                                        <Typography variant="overline" color="black" sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                                            Event Name
                                                            <Typography variant="caption" color="black">
                                                                {/* {item.localDateTime} */}
                                                                Posted: 12/15/1998
                                                            </Typography>
                                                        </Typography>
                                                        <Typography variant="h6" color="blue" >
                                                            Event at College
                                                        </Typography>
                                                    </List>
                                                </motion.div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Box>
                    </TabPanel>
                </TabContext>
            </Box>
        </>
    )
}
export default NdeTabs