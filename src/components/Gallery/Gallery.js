import React, { useEffect, useState } from "react";
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
import Files from "../../modules/Files";

export default function App() {


    const [itemData, setItemData] = useState([]);

    console.log(itemData)

    useEffect(() => {
        getAllImages();
    }, []);

    const getAllImages = () => {
        Files.getFiles(respone => {
            if (respone.status === 'success') {
                setItemData(respone.data.files);
            }
            else {
                console.log(respone.data);
            }
        })
    }

    const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    const mainContainer = {
        width: '98%',
        margin: 'auto',
        overflow: 'hidden',
        padding: '10px',
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
                    {
                        itemData.map((item, index) => {
                            return (
                                <SwiperSlide className="swiperSlides">
                                    <img style={{
                                        borderRadius: "5px",
                                    }}
                                        src={item.filePath} alt={item.fileName} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </Box>
        </Box >
    );
}
