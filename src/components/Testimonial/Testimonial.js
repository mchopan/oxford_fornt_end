
import { Avatar, Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonial.css'
import "swiper/css/effect-creative";
// import required modules
import { Pagination, Autoplay, EffectCreative } from "swiper";
import Testemionals from '../../modules/Testemionals/index';
import Loader from '../../assets/Loader/loader';


const Testimonial = () => {

    const [testemData, setTestemData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllTestemionals();
    }, [])


    const getAllTestemionals = () => {
        setLoading(true)
        Testemionals.getAllTestem((response) => {
            if (response.status === 'success') {
                setLoading(false)
                setTestemData(response.data.testems);
            } else {
                setTestemData([]);
                setLoading(false)
            }
        });
    };


    const styles = {
        width: '98vw',
        height: '100%',
        margin: 'auto',
        padding: '10px',
        borderRadius: '10px',

    }


    return (
        <Box sx={styles}>
            <Typography sx={{ fontSize: { xs: '35px', md: ' 80px' } }} variant="h1" textAlign={'center'}>
                Testimonial
            </Typography>
            <Grid container spacing={0}
                sx={{
                    overflow: 'hidden',
                    paddingTop: '0px',
                    backgroundColor: "wheat",
                }}
            >
                {
                    loading ? <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}><Loader /></Box> : (
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    origin: "left center",
                                    translate: ["-5%", 0, -200],
                                    rotate: [0, 100, 0],
                                },
                                next: {
                                    origin: "right center",
                                    translate: ["5%", 0, -200],
                                    rotate: [0, -100, 0],
                                },
                            }}
                            autoplay={{
                                delay: 7000
                            }}
                            modules={[Pagination, Autoplay, EffectCreative]}
                            className="mySwiper"
                            style={{ padding: '0px', height: '100%' }}
                        >
                            {
                                testemData.map((data, index) => (
                                    <SwiperSlide style={{ backgroundColor: '#e9eade' }}>
                                        <Grid xs={12} item
                                            sx={{
                                                // backgroundColor: 'rgba(225,225,225,)',
                                                padding: '10px',
                                                margin: '20px 20px',
                                            }}>

                                            <Typography color={'black'} variant="h3" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                <Avatar
                                                    sx={{ width: '150px', height: '150px' }}
                                                    src={data.PhotoURL}
                                                    alt={data.RName}
                                                />
                                                {data.RName}
                                                <Typography >
                                                    {data.RExpert}
                                                </Typography>
                                                <Typography sx={{ margin: '-10px', fontSize: { xs: '16px', md: '18px' }, textAlign: 'center', lineHeight: { xs: '25px', md: '40px' } }} p="20px" variant="body1">
                                                    <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />{data.RMessage}<FormatQuoteIcon />
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    )
                }
            </Grid>
        </Box >
    )
}

export default Testimonial