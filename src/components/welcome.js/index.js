import React from 'react'
import Typography from '@mui/material/Typography'
// import { motion } from 'framer-motion'
import './styles.css'

const Welcome = () => {

    const handleTextBox = {
        color: ' #ff0000',
        cursor: 'pointer',
        position: 'relative'
    }

    const welcomeStyle = {
        margin: '5px',
        fontSize: { xs: '14px', md: '16px' },
        backgroundColor: '#afb28847',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    }


    return (
        <>

            <div style={handleTextBox}>
                {/* <motion.div
                    className="box"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                /> */}
                <Typography veriant='h6' textAlign=' center' sx={welcomeStyle} >
                    Once again, welcome to Caset College Of Computer Science. We are excited to have you as a part of our family, and look forward to helping you achieve your full potential as a student and a global citizen!"
                </Typography>
            </div >
        </>
    )
}

export default Welcome