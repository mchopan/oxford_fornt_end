import Home from './pages/Home/Home.js';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.js';
import BottomAppBar from './components/Navbar/BottomNavbar.js';
import Notifications from './pages/Notifications/Notifications'
import { Route, Routes, useLocation, Outlet, Navigate } from 'react-router-dom';
import { Downloads } from './pages/Downloads/Downloads.js';
import About from './pages/About/About.js';
import { AnimatePresence } from 'framer-motion';
import Events from './pages/Events/Events.js';
import Contact2 from './components/Contact/Contact2.js';
import Index from './CMS/Index.js';
import userDetails from './modules/User/userDetails';
import ProtectedRoute from '../src/utils/utils';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  return (
    <>
      {isAdmin ? null : <Navbar />}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Notifications' element={<Notifications />} />
          <Route path='/Downloads' element={<Downloads />} />
          <Route path='/Contact' element={<Contact2 />} />
          {isAdmin && userDetails.isAuthenticated() ? (
            <Route path='/admin' element={<Index />} />
          ) : (
            <Route path='/admin/*' element={<Navigate to='/Home' />} />
          )}

        </Routes>
      </AnimatePresence>
      {isAdmin ? null : <Footer />}
      {isAdmin ? null : <BottomAppBar />}
      {isAdmin && userDetails.isAuthenticated() && <Outlet />}
    </>
  );
}

export default App;
