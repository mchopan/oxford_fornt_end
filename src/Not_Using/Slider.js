import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Pic3 from '../../assets/img (1).jpg';
import Pic4 from '../../assets/img (2).jpg';
import Pic5 from '../../assets/img (3).jpg';

// import Mpic1 from '../../assets/mobileView (1).jpg';
// import Mpic2 from '../../assets/mobileView (2).jpg';
// import Mpic3 from '../../assets/mobileView (3).jpg';

// Import Swiper styles
import "swiper/css";
import './HeroSlider.css'
// import required modules
import { Autoplay } from "swiper";
import Typewriter from "./TypeWritter";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/system";

export default function App() {

    const textArray = [
        "Creative Thinking & Innovation",
        "We foster wisdom",
        "Learning never exhausts the mind"
    ]

    const images = [Pic3, Pic4, Pic5];
    // const mobilePics = [Mpic1, Mpic2, Mpic3];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [text, setText] = useState(textArray[currentIndex]);


    const typeWriterStyles = {
        width: '100%',
        aspectRatio: 'calc(2.18 / 1)',
        position: 'absolute',
        zIndex: '9',
        margin: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(85, 53, 53, 0.7)',
        color: ' #FFD700  ',
        cursor: 'pointer'
    }

    return (
        <>
            <div className='slideshower'>
                <Box sx={typeWriterStyles}>
                    <Typography sx={{ fontSize: { xs: '20px', md: '70px', fontFamily: "'Fredericka the Great', cursive", }, }}>
                        <Typewriter />
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '10px', md: '40px', fontFamily: "Lobster, cursive", }, }}  >
                        {text}
                    </Typography>

                </Box>
                <Swiper
                    onSlideChange={({ activeIndex }) => {
                        setCurrentIndex(activeIndex);
                        setText(textArray[activeIndex]);
                    }}
                    speed={1100}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                // className="mySwiper"
                >
                    {
                        images?.map((items, incr) => {
                            return (
                                <>
                                    <SwiperSlide key={incr}>
                                        <img src={items} alt="pic" width={"100%"} />
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
        </>
    );
}
