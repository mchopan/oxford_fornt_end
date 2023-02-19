
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './Contact.css'
import { EmailSharp, LocationCity, PhoneAndroidOutlined } from '@mui/icons-material';

const Contact = () => {

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        minWidth: { xs: '350px', md: '500px' },
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
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minWidth: { xs: '350px', md: '500px' },
        gap: { xs: '5px', md: '50px' },
        columnGap: '50px',
        padding: '10px 10px',
        margin: { xs: '0px auto', md: '0px 0px 0px 0px' },
        transition: 'box-shadow 0.3s ease-in-out',
        ':hover': {
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        }
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
                    <Typography sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '15px', fontSize: '16px' }} variant="h6" color="initial">
                        <LocationCity />
                        Karan Nagar , Near Gole Market,<br /> Srinagar - 190010
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '15px', fontSize: '16px' }} variant="h6" color="initial">
                        <EmailSharp />
                        casetcollege2001@gmail.com
                    </Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '15px', fontSize: '16px' }} variant="h6" color="initial">
                        <PhoneAndroidOutlined />
                        0194-2459153
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Contact

