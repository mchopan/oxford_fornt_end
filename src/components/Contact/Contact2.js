import { Avatar, Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import './Contact2.css'

const Contact2 = () => {
    return (
        <>
            <Box className='main-container'>
                <form>
                    <Box className='form-fields'>
                        <Typography variant="h5">
                            Contact Us
                        </Typography>
                        <Typography variant="body1" >
                            Feel Free to contact us any time. We will get back to you as soon as we can!.
                        </Typography>
                        <TextField
                            required
                            variant='standard'
                            id="name"
                            label="Name"
                            name="name"
                        // value={ }
                        // onChange={ }
                        />
                        <TextField
                            required
                            variant='standard'
                            id="email"
                            label="Email"
                            name="email"
                        // value={ }
                        // onChange={ }
                        />
                        <TextField
                            required
                            variant='standard'
                            multiline
                            rows={3}
                            id="message"
                            label="Message"
                            name="mesage"
                        // value={ }
                        // onChange={ }
                        />
                        <Button variant='contained'>Send</Button>
                    </Box>
                </form>
                <Box>
                    <Typography variant="h4">
                        <Avatar src='' />

                    </Typography>
                </Box>
            </Box>
            <section className="map_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="map_inner">
                                <Typography textAlign={'center'} variant="h5" sx={{ width: '80vw', margin: 'auto' }} >
                                    Find Us on Google Map
                                </Typography>
                                <div className="map-container">
                                    <iframe src="https://www.google.com/maps/place/CASET+College+of+Science+and+Engineering/@34.0825849,74.7984734,21z/data=!4m6!3m5!1s0x38e18ff42c15f46f:0x3b5a15fefe24717f!8m2!3d34.082558!4d74.798468!16s%2Fg%2F1thmjchh" width="80%" height={450} frameBorder={0} style={{ "border": "0" }} allowFullScreen aria-hidden="false" tabIndex={0} title='maps' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact2