import React from 'react'
import Typography from '@mui/material/Typography'

const Welcome = () => {

    const handleTextBox = {
        color: ' #ff0000',
        cursor: 'pointer'
    }

    const welcomeStyle = {
        margin: '5px',
        fontSize: { xs: '14px', md: '16px' },
        backgroundColor: '#1976d2',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }


    return (
        <>
            <div style={handleTextBox}>

                <Typography veriant='h6' color="initial" textAlign='center' sx={welcomeStyle} >
                    Once again, welcome to Caset College Of Computer Science. We are excited to have you as a part of our family, and look forward to helping you achieve your full potential as a student and a global citizen!"
                </Typography>
            </div >
        </>
    )
}

export default Welcome