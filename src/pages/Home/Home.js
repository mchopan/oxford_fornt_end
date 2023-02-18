import { Box } from "@mui/system";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import Notifications from "../../components/Notifications/Notifications";
import PrincipleMessage from "../../components/PrincipleMessage/PrincipleMessage";
import Testimonial from "../../components/Testimonial/Testimonial";



function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Hero />
            <Notifications />
            <Gallery />
            <Testimonial />
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <PrincipleMessage />
            </Box>
            <About />
            <Contact />
        </Box>
    );
}

export default Home;
