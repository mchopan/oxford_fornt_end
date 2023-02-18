import React from 'react'
import Typography from '@mui/material/Typography'

const Welcome = () => {

    const handleTextBox = {
        color: ' #ff0000',
        cursor: 'pointer'
    }

    return (
        <>
            <div style={handleTextBox}>
                <Typography variant="h6" textAlign='center ' color='black'>Unlock Your Potential with a Bright Future in Information Technology!</Typography>
                <Typography veriant='h6' color="initial" textAlign='center' sx={{ margin: '5px', padding: '5px', fontSize: { xs: '14px', md: '16px' } }} >
                    We extend a warm welcome to you as you embark on a journey towards a thriving career in the rapidly growing field of Information Technology (I.T.). As you may already know, the Prime Minister of India has recognized I.T. as a crucial sector for our nation's growth and has formed an I.T. Task Force to steer the country towards this goal.
                    <br />
                    With an anticipated 2 lac new job opportunities in the I.T. industry each year, this is your chance to seize a bright future. India is currently facing a shortage of I.T. professionals, making this an excellent opportunity to establish yourself in this exciting industry.
                    <br />
                    Embrace this opportunity and allow us to guide you towards a rewarding career in I.T.!
                </Typography>
            </div>
        </>
    )
}

export default Welcome