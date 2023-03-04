import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import './styles.css'






const Events = () => {
    const [days, setDays] = useState(30);
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(60);


    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const endTime = new Date();

            // Calculate time difference
            const diff = endTime - now;

            // Calculate days, hours, and minutes
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = now.getHours();
            const minutes = now.getMinutes();

            // Update state
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
        }, 60000); // Update every minute

        // Clear interval on unmount
        return () => clearInterval(interval);
    }, []);

    const mainContainer = {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center'
    }

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

    return (
        <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            <Box sx={mainContainer}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px'
                }}>
                    <Typography sx={{ fontSize: { xs: '40px', md: '60px' } }} variant="h3">
                        UP COMING EVENT
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px', }}>
                        <span className='day'>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '40px', md: '100px' } }} variant="h1">
                                {days}
                                <Typography variant="h6" textAlign={'center'}>
                                    DAYS
                                </Typography>
                            </Typography>
                        </span>
                        <Typography variant="h1">
                            :
                        </Typography>
                        <span className='hour '>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '40px', md: '100px' } }} variant="h1" >
                                {hours}
                                <Typography variant="h6" textAlign={'center'}>
                                    HOURS
                                </Typography>
                            </Typography>
                        </span>
                        <Typography variant="h1">
                            :
                        </Typography>
                        <span className='min'>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '40px', md: '100px' } }} variant="h1">
                                {minutes}
                                <Typography variant="h6" textAlign={'center'}>
                                    MINUTES
                                </Typography>
                            </Typography>
                        </span>
                    </Box>
                    <Typography sx={{ fontSize: { xs: '40px', md: '60px' } }} variant="h2" >
                        Title Of The Event
                    </Typography>
                </Box >
                <br />

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                }}>
                    <Typography variant="h3">
                        OTHER EVENTS
                    </Typography>
                    <Box sx={{

                        overflowY: 'scroll',
                        height: '500px'
                    }}>

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <Box sx={{ display: 'flex', gap: '5px', margin: '5px', padding: '5px' }}>
                                    <Typography variant="h5" color="initial" textAlign='center' sx={{
                                        backgroundColor: '#b8f0ff',
                                        padding: '10px',
                                        width: '100px',
                                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
                                    }}>
                                        15<br />
                                        MAY
                                    </Typography>
                                    <Typography variant="h6" color="initial" sx={{
                                        backgroundColor: '#f3f3f3',
                                        padding: '10px',
                                        width: { xs: '250px', md: '400px' },
                                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
                                    }} >
                                        Title
                                        <Typography>
                                            Lorim anna nanu e naje wd
                                        </Typography>
                                    </Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box >
        </motion.div>
    )
}

export default Events

