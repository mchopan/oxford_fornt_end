import * as React from 'react';
import './style.css'
import { Box, Card, CardContent, Typography } from '@mui/material';

import { motion } from 'framer-motion'
import Notification from '../../modules/Notification';
import { maxHeight } from '@mui/system';

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


const container_styles = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    margin: '10px',
    padding: '10px',
    height: 550,
    overflowY: "scroll",
}


export default function Notifications() {

    const [notifications, setNotifications] = React.useState([])

    const currentTime = new Date();

    const getNotifications = () => {
        Notification.getAllNotifications(response => {
            if (response.status === 'success') {
                setNotifications(response.data.notifications)
            } else {
                console.log(response)
            }
        })
    }

    React.useEffect(() => {
        getNotifications()

    }, [])


    return (
        <>
            <motion.div
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"

            >
                <Typography sx={{ borderBottom: '2px solid black' }} variant="h5" textAlign="center" color="white" backgroundColor="gray">
                    Notifications
                </Typography>
                <Box sx={container_styles}>
                    {
                        notifications.length && notifications?.map(notification => (
                            <Card key={notification._id} sx={{ width: 300, position: 'relative' }}>
                                {currentTime.getTime() - new Date(notification.createdAt).getTime() < 86400000 && (
                                    <div style={{ position: 'absolute', width: '98%', textAlign: 'center', padding: '5px', color: 'white' }}>
                                        <div style={{ backgroundColor: 'red', width: '30px', margin: 'auto', fontWeight: '500', fontSize: '9px', borderRadius: '10px' }}>
                                            New
                                        </div>
                                    </div>
                                )}
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {notification.notiName}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {new Date(notification.createdAt).toLocaleString('en-IN', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                        })}
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" sx={{ fontSize: '16px' }}>
                                        {notification.notiDesc}
                                    </Typography>
                                </CardContent>
                            </Card>

                        ))
                    }
                </Box>
            </motion.div>
        </>
    )

}
