import './App.css';
import 'flowbite';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './Components/TermsCondition/TermsCondition';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Advertisement from './Components/Advertisement/Advertisement';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy/policy' element={<PrivacyPolicy />} />
        <Route path='/terms/condition' element={<TermsCondition />} />
        <Route path='/about/us' element={<About />} />
        <Route path='/contact/us' element={<Contact />} />
        <Route path='/advertisement' element={<Advertisement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
