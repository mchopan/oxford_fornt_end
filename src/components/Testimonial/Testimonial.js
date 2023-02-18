
import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonial.css'
import "swiper/css/effect-creative";

// import required modules
import { Pagination, Navigation, Autoplay, EffectCreative } from "swiper";


const cardData = [
    {
        avatar: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        name: 'Huzaif',
        work: 'Bioniest',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ex at metus porttitor vestibulum. Integer vel vulputate nibh. Suspendisse eget metus sit amet dolor iaculis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In turpis nunc, bibendum sit amet auctor vitae, convallis ut ligula. Sed vehicula vulputate augue a molestie. Aliquam sit amet tempus sem.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Manzoor',
        work: 'Software Engineer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ex at metus porttitor vestibulum. Integer vel vulputate nibh. Suspendisse eget metus sit amet dolor iaculis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In turpis nunc, bibendum sit amet auctor vitae, convallis ut ligula. Sed vehicula vulputate augue a molestie. Aliquam sit amet tempus sem.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80',
        name: 'Ayash',
        work: 'Data Engineer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ex at metus porttitor vestibulum. Integer vel vulputate nibh. Suspendisse eget metus sit amet dolor iaculis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In turpis nunc, bibendum sit amet auctor vitae, convallis ut ligula. Sed vehicula vulputate augue a molestie. Aliquam sit amet tempus sem.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Ishfaq',
        work: 'Physologiest',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ex at metus porttitor vestibulum. Integer vel vulputate nibh. Suspendisse eget metus sit amet dolor iaculis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In turpis nunc, bibendum sit amet auctor vitae, convallis ut ligula. Sed vehicula vulputate augue a molestie. Aliquam sit amet tempus sem.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1594819047050-99defca82545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=394&q=80',
        name: 'Aatif',
        work: 'Banker ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ex at metus porttitor vestibulum. Integer vel vulputate nibh. Suspendisse eget metus sit amet dolor iaculis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In turpis nunc, bibendum sit amet auctor vitae, convallis ut ligula. Sed vehicula vulputate augue a molestie. Aliquam sit amet tempus sem.'
    },
    {
        avatar: 'https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80',
        name: 'Firdous',
        work: 'Automobile Engineer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor ex at metus porttitor vestibulum. Integer vel vulputate nibh. Suspendisse eget metus sit amet dolor iaculis facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In turpis nunc, bibendum sit amet auctor vitae, convallis ut ligula. Sed vehicula vulputate augue a molestie. Aliquam sit amet tempus sem.'
    },
]


const Testimonial = () => {


    const styles = {
        width: '98vw',
        height: '98vh',
        margin: 'auto',
        padding: '10px',
        // borderRadius: '10px',
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }


    return (
        <Box sx={styles}>
            <Typography sx={{ fontSize: { xs: '35px', md: ' 80px' } }} variant="h1" textAlign={'center'}>
                Testimonial
            </Typography>
            <Grid container spacing={0}
                sx={{
                    overflow: 'hidden',
                    paddingTop: '0px'
                }}
            >

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
                    navigation={true}
                    modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                    className="mySwiper"
                    style={{ padding: '0px', height: '85vh' }}
                >
                    {
                        cardData.map((data, index) => (
                            <SwiperSlide style={{ backgroundColor: 'white' }}>
                                <Grid xs={12} item
                                    sx={{
                                        // backgroundColor: 'rgba(225,225,225,)',
                                        padding: '20px',
                                        margin: '30px 30px',
                                        height: 'calc(98vh - 150px)'
                                    }}>

                                    <Typography color={'black'} variant="h3" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <Avatar
                                            sx={{ width: '150px', height: '150px' }}
                                            src={data.avatar}
                                            alt={data.name}
                                        />
                                        {data.name}
                                        <Typography >
                                            {data.work}
                                        </Typography>
                                        <Typography sx={{ margin: '-10px', fontSize: { xs: '16px', md: '18px' }, textAlign: 'center', lineHeight: { xs: '25px', md: '40px' } }} p="20px" variant="body1">
                                            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />{data.description}<FormatQuoteIcon />
                                        </Typography>
                                    </Typography>

                                </Grid>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </Grid>
        </Box >
    )
}

export default Testimonial