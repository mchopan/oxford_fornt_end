import { Box } from "@mui/system";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import Notifications from "../../components/Notifications/Notifications";
import PrincipleMessage from "../../components/PrincipleMessage/PrincipleMessage";
import Testimonial from "../../components/Testimonial/Testimonial";
import { motion } from 'framer-motion'
import { Opacity } from "@mui/icons-material";


function Home() {

    const transition = {
        duration: 0.3,
        ease: 'easeOut',
    };

    const variants = {
        enter: {
            x: '-100%',
            opacity: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            transition,
        },
        exit: {
            x: '100%',
            opacity: 0,
            transition,
        },
    };
    return (
        <motion.Box
            sx={{
                minWidth: '350px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}
            component="div"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            <Hero />
            <Notifications />
            <Gallery />
            <Testimonial />
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <PrincipleMessage />
            </Box>
            <About />
            <Contact />
        </motion.Box>
    );
}

export default Home;
