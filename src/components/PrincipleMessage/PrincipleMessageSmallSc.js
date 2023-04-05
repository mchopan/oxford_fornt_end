import { Avatar, Typography, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const PrincipleMessageSm = () => {
    const handleBox = {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '10px',
        backgroundColor: '#e9eade',
        padding: '20px',
        margin: '10px',
    }

    const avatar = {
        width: { xs: '150px', md: '200px' },
        height: { xs: '150px', md: '200px' },
        margin: '0 20px 20px 0',
    }

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <Box sx={handleBox}>
                <Avatar
                    variant="rounded"
                    sx={avatar}
                    alt="Vinod"
                    src="https://casetcollege.in/wp-content/uploads/2023/04/principle2.jpg"
                />
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" textAlign="center" color="black">
                        PRINCIPAL'S MESSAGE
                    </Typography>
                    <Typography
                        variant="h6"
                        color="initial"
                        textAlign="center"
                        sx={{
                            margin: '5px',
                            padding: '5px',
                            fontSize: { xs: '14px', md: '16px' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: isExpanded ? 'auto' : '100px',
                            overflow: 'hidden',
                        }}
                    >
                        <span style={{ fontWeight: '500' }}>
                            As a student, you'll enjoy top-notch facilities like state-of-the-art labs and a comprehensive library. Our dedicated faculty is always there to support you in your studies and encourage self-expression. The college's philosophy fosters an atmosphere of freedom and openness, promoting success and growth.
                        </span>
                        <br />
                        <span style={{ fontWeight: '500' }}>
                            Our principal is always available to offer guidance and support, and the college is proud to have produced successful alumni who are now professors, business executives, scientists, and IT specialists in India and abroad. With hard work and a cooperative attitude, you too can achieve great things.
                        </span>
                        <br />
                        <span style={{ fontWeight: '500' }}>
                            The BCA program has been a game-changer for serious students, offering real-world exposure through guest lectures and seminars from industry experts. Join us and see how far your passion for computer science can take you!
                        </span>
                    </Typography>
                    <IconButton sx={{ display: 'block', margin: '0 auto' }} onClick={toggleExpanded}>
                        {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default PrincipleMessageSm
