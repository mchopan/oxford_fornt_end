import { Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {

    const kashmir_university_links = [
        {
            link: 'http://www.kashmiruniversity.net/Admissions',
            name: 'Admissions and Recruitment'
        },
        {
            link: 'http://egov.uok.edu.in/results/',
            name: 'Examination notifications and results'
        },
        {
            link: 'http://egov.uok.edu.in/student/',
            name: 'Student portal'
        },
        {
            link: 'http://www.kashmiruniversity.net/Scholarships',
            name: 'Scholarships and Financial Aid'
        },
        {
            link: 'http://www.kashmiruniversity.net/Career_Placement_Cell',
            name: 'Career and Placement cell'
        }
    ];

    const college_website_links = [
        {
            name: "Online learning platform",
            link: "https://www.coursera.org/"
        },
        {
            name: "Career development and job search website",
            link: "https://www.linkedin.com/"
        },
        {
            name: "Education News",
            link: "https://www.bbc.com/news/education"
        },
        {
            name: "Open access academic journal",
            link: "https://journals.plos.org/plosone/"
        },
        {
            name: "Professional organizations and association",
            link: "https://www.apa.org/"
        }
    ]



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
                        kashmir_university_links.map((link, index) => (
                            <Typography key={index} >
                                <Link sx={{ fontWeight: "500" }} href={link.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                    {link.name}
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
                        college_website_links.map((link, index) => (
                            <Typography key={index} >
                                <Link sx={{ fontWeight: "500" }} href={link.link} target="_blank" rel="noopener noreferrer" underline="hover">
                                    {link.name}
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