import { Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    const arrayOfLinks = ['lorium si ssi  smmwvahwd  sa', 'link 2', 'link 3', 'link 4', 'link 5']

    const universitylinks = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '10px',


    }

    const contactStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '10px',
        rowGap: '15px'
    }
    const mainContainer = {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-around',
        color: 'black',
        width: '100%',
        margin: 'auto',
        backgroundColor: 'white',
    }

    const horizontalLine = {
        width: '100%',
        height: '1px',
        margin: '16px 0',
        backgroundColor: '#000',
    }

    return (
        <>
            <hr style={horizontalLine} />
            <Box sx={mainContainer}>
                <Box sx={universitylinks}>
                    <Typography fontWeight={'600'} sx={{ fontSize: { xs: '20px', md: '24px' } }} variant="h5" >
                        University Links
                    </Typography>
                    <hr style={horizontalLine} />
                    {
                        arrayOfLinks.map((link, index) => (
                            <Typography key={index} variant='h6'>
                                <Link color="inherit" href="" underline="hover">
                                    {link}
                                </Link>
                            </Typography>
                        ))
                    }

                </Box>
                <Box sx={universitylinks}>
                    <Typography fontWeight={'600'} sx={{ fontSize: { xs: '20px', md: '24px' } }} variant="h5" >
                        Important Links
                    </Typography>
                    <hr style={horizontalLine} />
                    {
                        arrayOfLinks.map(link => (
                            <Typography variant='h6'>
                                <Link color="red" href="#" underline="hover">
                                    {link}
                                </Link>
                            </Typography>
                        ))
                    }

                </Box>
                <Box sx={contactStyles}>
                    <Button
                        sx={{
                            width: '150px',
                            height: { xs: '50px', md: '50px' },
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
                            width: '150px',
                            height: { xs: '50px', md: '50px' },
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
                            width: '150px',
                            height: { xs: '50px', md: '50px' },
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
            <Box>
                <Typography sx={{ textAlign: 'center', marginBottom: { xs: '100px', md: '10px' } }} variant="subtitle1" color="initial">
                    © 2022 Caset College Of Computer Science & Engineering. All Rights Reserved.
                    <br />
                    Manzoor Ahmad Chopan
                </Typography>
            </Box>
        </>
    )
}

export default Footer