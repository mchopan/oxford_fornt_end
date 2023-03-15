import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer.js';
import { Outlet } from 'react-router-dom';
import BottomNavbar from '../components/Navbar/BottomNavbar'
import { useTheme } from '@mui/material/styles';

const Layout = ({ children }) => {
    const theme = useTheme();
    const isMobile = theme.breakpoints.down('sm'); // set breakpoint for mobile devices
    return (
        <>
            <Navbar />
            <Outlet />
            {isMobile && <BottomNavbar sx={{ display: { xs: 'block', md: 'none' } }} />}
            <Footer />
        </>
    );
};
export default Layout;
