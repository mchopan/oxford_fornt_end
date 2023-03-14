import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer.js';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};
export default Layout;
