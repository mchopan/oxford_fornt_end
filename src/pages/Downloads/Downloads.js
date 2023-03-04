import React from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardActions, CardContent, Typography, CardHeader, Avatar, IconButton } from '@mui/material';
import { Box } from '@mui/system';

export const Downloads = () => {
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


    const styles = {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        margin: '10px',
        padding: '10px'
    }



    return (
        <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            <Box sx={styles}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                        <Card sx={{
                            width: '300px'
                        }}>
                            <CardHeader
                                title=" Title"
                                subheader=" 12/02/2023"
                            />
                            <CardContent>
                                <Typography variant="body1" >
                                    This the the downlads descriotion
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined'>Download</Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Box>
        </motion.div>
    )
}
