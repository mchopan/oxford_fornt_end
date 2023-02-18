import Home from './pages/Home/Home.js';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.js';
import BottomAppBar from './components/Navbar/BottomNavbar.js';
import Notifications from './pages/Notifications/Notifications'
import { Route, Routes } from 'react-router-dom';
import { Downloads } from './pages/Downloads/Downloads.js';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/downloads' element={<Downloads />} />
      </Routes>
      <Footer />
      <BottomAppBar />
    </>
  );
}

export default App;
