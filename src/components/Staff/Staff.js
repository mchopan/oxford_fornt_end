import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import StaffMembers from '../../modules/Staff/index'
import Loader from '../../assets/Loader/loader';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
// import required modules
import { Pagination } from "swiper";



export default function Staff() {

    const [staff, setStaff] = React.useState([])
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        getAllStaffMembers();
    }, [])

    const getAllStaffMembers = () => {
        setLoading(true)
        StaffMembers.getAllStaffMember(response => {
            if (response.status === 'success') {
                setLoading(false)
                setStaff(response.data.staff);
            }
            else {
                setLoading(false)
                console.log("error in geting staff members")
            }
        })
    }

    const newStyles = {
        display: 'flex',
        backgroundColor: "#e7ceeaab",
        justifyContent: 'center',
        alignItems: 'center',
        padding: "50px",
        width: '100%',
    }

    return (
        <>
            <Typography variant="h6" color='#0077c2' textAlign='center'>
                Meet The Crew
            </Typography>

            <Box sx={{ flexWrap: "wrap", display: "flex", gap: "10px", justifyContent: "center", marginTop: "10px", padding: "10px" }}>
                {
                    loading ? <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}><Loader /></Box> : (
                        <Swiper
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            }}
                            grabCursor={true}
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
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            style={newStyles}
                        >
                            {
                                staff.map((card, index) => (
                                    <SwiperSlide>
                                        <Card sx={{ width: 200 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="200px"
                                                    image={card.PhotoURL}
                                                    alt={card.name}
                                                />
                                                <CardContent sx={{ textAlign: "center" }}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {card.name}
                                                    </Typography>
                                                    <Typography variant="caption">
                                                        {card.expert}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                        </Swiper >
                    )
                }
            </Box>

        </>
    );
}