import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styleDiv.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { Box, Typography } from "@mui/material";

export default function App() {

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    const mainContainer = {
        width: '98%',
        margin: 'auto',
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        overflow: 'hidden',
        padding: '10px',
        // borderRadius: '10px'
    }





    return (
        <Box sx={mainContainer} >
            <Box>
                <Typography sx={{ fontSize: { xs: '35px', md: '80px' } }} variant="h1" textAlign={'center'}>
                    Gallery
                </Typography>
            </Box>
            <Box sx={style}>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 5000,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1038329663187062804/1063848250886598686/AICONNOR__bfc71712-1eea-4f2b-9112-e0af06c8fcbb.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1038329663187062804/1063848249938677790/AICONNOR___forest_mythic_Al__vibrant_ultra_realistic_golden_and_b0de4059-10d1-4c06-b94c-725974f49e96.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1038329663187062804/1063848249380851844/AICONNOR___forest_mythic_Al__vibrant_ultra_realistic_golden_and_4216e632-3ca7-487e-9369-2224252e2f8f.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1064028188533063780/1064028189279670314/colorful_battle_harden_samurai.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1064028188533063780/1064028190047207564/samurai_and_gesha.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1038329663187062804/1068262368196427776/Bluewing_Beautiful_blonde_hair_woman_in_harajuku_style_photogra_9dc81164-1817-4315-a7ed-6a398469e262.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1066057103845888091/1066057104420503632/grid_0_2.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://cdn.discordapp.com/attachments/1067370096881848382/1067370099620724746/Ally_Al_Princess_Rosaline_from_Super_Mario_but_she_is_a_rugged__364aec23-a76f-435a-b8bf-94fc7ef9e51c.png" alt="opps" />
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlides">
                        <img src="https://media.discordapp.net/attachments/1038329663187062804/1068262364924891227/Bluewing_Beautiful_red_hair_woman_in_harajuku_style_photography_308d1ade-a018-4ec5-b03e-8ddd4e40e992.png?width=341&height=498" alt="opps" />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box >
    );
}
