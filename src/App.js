import Home from './pages/Home/Home.js';
import Notifications from './pages/Notifications/Notifications'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Downloads } from './pages/Downloads/Downloads.js';
import About from './pages/About/About.js';
import { AnimatePresence } from 'framer-motion';
import Events from './pages/Events/Events.js';
import Index from './CMS/Index.js';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Layout from './utils/Layout.js';
import Gallery from './pages/Galary/Gallery.js';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton.js';

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Notifications' element={<Notifications />} />
            <Route path='/Downloads' element={<Downloads />} />
            <Route path='/Gallery' element={<Gallery />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/Admin' element={<Index />} />
          </Route>
        </Routes>
        <ScrollToTopButton />
      </AnimatePresence>
    </>
  );
}

export default App;
