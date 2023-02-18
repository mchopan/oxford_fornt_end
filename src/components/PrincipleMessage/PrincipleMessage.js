import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PrincipleMessage = () => {
    const handleBox = {
        display: { xs: 'block', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100%',
        // backgroundColor: '#f2eecb',
        color: ' #ff0000'
    }
    const avatar = {
        margin: ' auto',
        height: { xs: '150px', md: '300px' },
        width: { xs: '100px', md: '200px' }
    }

    return (
        <>
            <Box sx={handleBox}>
                <Box sx={{ margin: '5px', textAlign: 'center' }}>
                    <Avatar
                        variant="rounded"
                        sx={avatar}
                        alt='Vinod'
                        src='http://www.casetcollege.in/images/principal_photo.jpg'
                    />
                    <Typography variant="caption" color="initial">
                        Prof. Vinod Vishen
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" textAlign='center' color='black'>PRINCIPAL'S MESSAGE</Typography>
                    <Typography
                        variant="h6"
                        color="initial"
                        textAlign='center'
                        sx={{
                            margin: '5px', padding: '5px',
                            fontSize: { xs: '14px', md: '16px' }

                        }}>

                        As a student, you'll enjoy top-notch facilities like state-of-the-art labs and a comprehensive library. Our dedicated faculty is always there to support you in your studies and encourage self-expression. The college's philosophy fosters an atmosphere of freedom and openness, promoting success and growth.
                        <br />
                        Our principal is always available to offer guidance and support, and the college is proud to have produced successful alumni who are now professors, business executives, scientists, and IT specialists in India and abroad. With hard work and a cooperative attitude, you too can achieve great things.
                        <br />
                        The BCA program has been a game-changer for serious students, offering real-world exposure through guest lectures and seminars from industry experts. Join us and see how far your passion for computer science can take you!
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default PrincipleMessage