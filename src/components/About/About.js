import { Typography, Box } from '@mui/material'
import React from 'react'

const About = () => {

    const mainContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: '98vw',
        marginTop: '30px',
        margin: 'auto',
        paddingTop: '20px',
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        // borderRadius: '10px'
    }

    const textImage = {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        margin: { xs: '10px' },
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
    }

    return (
        <Box sx={mainContainer}>
            <Typography sx={{ fontSize: { xs: '35px', md: ' 80px' }, padding: '10px', margin: '10px' }} variant='h1' textAlign='center'>
                About Us
            </Typography>
            <Box sx={textImage}>
                <Box sx={{ display: { xs: 'none', md: 'block' }, width: { xs: '50%', md: '100%', } }}>
                    <img src='https://cdn.discordapp.com/attachments/1038329663187062804/1068605726878072952/IMG_0124.png' alt='aboutUs' width='400px' />
                </Box>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', rowGap: { xs: '20px', md: '60px' },

                }}>
                    <Typography sx={{ fontSize: { xs: '20px', md: '30px', textAlign: 'center' } }} variant="h4"  >
                        Caset College Of Computer Science & Engineering
                    </Typography>
                    {/* <Typography sx={{ fontSize: { xs: '16px', md: '20px', textAlign: { xs: 'center' } } }} variant="h6" > */}
                    <Typography veriant='h6' color="initial" textAlign='center' sx={{ margin: '5px', padding: '5px', fontSize: { xs: '16px', md: '20px' } }} >
                        Founded in 1974 by Prof. C. L. Vishen, CASET started as a lab school for research in education and school management. Over the years, it has become a well-renowned institution, offering a range of educational opportunities to students in the valley.
                        <br />
                        With two high schools and a middle school, CASET provides education to over 2500 students. The Nund Reshi College of Education offers a B. Ed. program under the affiliation of Kashmir University. Meanwhile, CASET Postgraduate Evening College offers private, regular classes for M.A. and M.Sc. programs in mathematics, commerce, sociology and more.
                        <br />
                        Join CASET and be part of an institution that's constantly growing and dedicated to providing the best education for students in the valley.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

}

export default About


