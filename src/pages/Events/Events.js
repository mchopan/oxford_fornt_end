import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import './styles.css'

import EventsApi from '../../modules/Events/index'
import { Helmet } from 'react-helmet-async'


const Events = () => {

    const [events, setEvents] = useState([]);
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [eventEnded, setEventEnded] = useState(false);

    const getEvents = () => {
        EventsApi.getAllEvents(response => {
            if (response.status === 'success') {
                console.log(response.data.events, "response")
                setEvents(response.data.events)
            }
            else {
                console.log(response.error)
            }
        })
    }


    useEffect(() => {
        getEvents()
    }, [])

    useEffect(() => {
        if (events.length > 0) {
            startTimer();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [events]);

    useEffect(() => {
        if (eventEnded) {
            EventsApi.deleteEventById(events[0]._id, response => {
                if (response.status === 'success') {
                    console.log('Event deleted successfully');
                    getEvents();
                } else {
                    console.log(response.error);
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventEnded]);


    let Interval;

    const startTimer = () => {
        const eventTimes = events[0]?.eventTime;
        const countDownDate = new Date(eventTimes).getTime();

        Interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);

            if (distance < 0) {
                clearInterval(Interval);
                setEventEnded(true);
            }
        }, 1000);
    };


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
            <Helmet>
                <title>Events</title>
                <meta name="description" content="Events Of Caset College of Computer Science" />
                <link rel="canonical" href="/Events" />
            </Helmet>
            <Typography sx={{ borderBottom: '2px solid black' }} variant="h5" textAlign="center" color="white" backgroundColor="gray">
                Events
            </Typography>
            <Box sx={mainContainer}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Typography sx={{ fontSize: { xs: '30px', md: '60px' } }} >
                        UP COMING EVENT
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '8px', }}>
                        <span className='day'>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '30px', md: '100px' } }}>
                                {days}
                                <Typography variant="h6" textAlign={'center'}>
                                    DAYS
                                </Typography>
                            </Typography>
                        </span>

                        <span className='hour '>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '30px', md: '100px' } }} >
                                {hours}
                                <Typography variant="h6" textAlign={'center'}>
                                    HOURS
                                </Typography>
                            </Typography>
                        </span>

                        <span className='min'>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '30px', md: '100px' } }} variant="h1">
                                {minutes}
                                <Typography variant="h6" textAlign={'center'}>
                                    MINS
                                </Typography>
                            </Typography>
                        </span>

                        <span className='min'>
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: '30px', md: '100px' } }} variant="h1">
                                {seconds}
                                <Typography variant="h6" textAlign={'center'}>
                                    SECS
                                </Typography>
                            </Typography>
                        </span>
                    </Box>
                </Box >
                <br />

                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                }}>
                    <Box sx={{

                        overflowY: 'scroll',
                        height: '500px'
                    }}>

                        {
                            events.map((item, index) => (
                                <Box key={item._id} sx={{ display: 'flex', gap: '5px', margin: '5px', padding: '5px' }}>
                                    <Typography variant="h5" color="initial" textAlign='center' sx={{
                                        backgroundColor: '#b8f0ff',
                                        padding: '8px',
                                        width: '100px',
                                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
                                    }}>
                                        {new Date(item.eventTime).toLocaleString('en-IN', {
                                            day: 'numeric',
                                        })}
                                        <br />
                                        {new Date(item.eventTime).toLocaleString('en-IN', {
                                            month: 'short',
                                        })}
                                    </Typography>
                                    <Typography variant="h6" color="initial" sx={{
                                        backgroundColor: '#f3f3f3',
                                        padding: '10px',
                                        width: { xs: '250px', md: '400px' },
                                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
                                    }} >
                                        {item.eventName}
                                        <Typography>
                                            {item.eventDesc}
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

