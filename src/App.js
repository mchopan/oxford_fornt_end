import Home from './pages/Home/Home.js';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.js';
import BottomAppBar from './components/Navbar/BottomNavbar.js';
import Notifications from './pages/Notifications/Notifications'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Downloads } from './pages/Downloads/Downloads.js';
import About from './pages/About/About.js';
import { AnimatePresence } from 'framer-motion';
import Events from './pages/Events/Events.js';


function App() {

  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Notifications' element={<Notifications />} />
          <Route path='/Downloads' element={<Downloads />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BottomAppBar />
    </>
  );
}

export default App;
