
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css'

const Contact = () => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '400px', md: '500px' },
        padding: '10px',
        gap: '20px',
        margin: { xs: '0px auto', md: '0px 0px 0px 0px' }
    }

    const mainContainer = {
        width: '98vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        padding: { xs: '0px', md: '20px' },
        rowGap: '20px',
        columnGap: '50px',
        margin: 'auto'
    }
    const socialStyles = {
        display: 'flex',
        width: { xs: '400px', md: '500px' },
        flexDirection: { xs: 'row', md: 'column' },
        gap: { xs: '5px', md: '50px' },
        padding: '0px 10px',
        margin: { xs: '0px auto', md: '0px 0px 0px 0px' }
    }


    return (
        <>
            <Typography sx={{ fontSize: { xs: '35px', md: ' 80px' } }} variant="h1" textAlign={'center'}>
                Contact us
            </Typography>
            <Box sx={mainContainer}>
                <Box sx={formStyle}>
                    <TextField
                        label="Name"
                        id='name'
                        variant='outlined'
                    />
                    <TextField
                        label="Email"
                        type='email'
                        id='name'
                        variant='outlined'
                    />

                    <TextField
                        id="standard-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        // defaultValue="Defalt Value"
                        variant='outlined'
                    />
                    <Button variant='contained' className="send-button">
                        <span className="send-text" style={{ fontWeight: '500' }}>Send</span>
                        <span className="send-icon">
                            <SendIcon />
                        </span>
                    </Button>
                </Box>
                <Box sx={socialStyles}>
                    <Button
                        sx={{
                            height: { xs: '50px', md: '80px' },
                            backgroundColor: 'blue',
                            gap: { xs: '5px', md: '10' },
                            padding: '15px',
                            ':hover': {
                                backgroundColor: 'white',
                                color: 'blue'
                            }
                        }}
                        variant='contained'
                    >
                        <FacebookIcon fontSize='large' />
                        Facebook
                    </Button>
                    <Button
                        sx={{
                            height: { xs: '50px', md: '80px' },
                            backgroundColor: 'purple',
                            gap: { xs: '5px', md: '10' },
                            padding: '15px',
                            ':hover': {
                                backgroundColor: 'white',
                                color: 'purple'
                            }
                        }}
                        variant='contained'
                    >
                        <InstagramIcon fontSize='large' />
                        Instagram
                    </Button>
                    <Button
                        sx={{
                            height: { xs: '50px', md: '80px' },
                            backgroundColor: 'red',
                            gap: { xs: '5px', md: '10' },
                            padding: '15px',
                            ':hover': {
                                backgroundColor: 'white',
                                color: 'red'
                            }
                        }}
                        variant='contained'
                    >
                        <YouTubeIcon fontSize='large' />
                        Youtube
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Contact

