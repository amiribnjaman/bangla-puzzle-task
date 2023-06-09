import './App.css';
import 'flowbite';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Shared/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './Components/TermsCondition/TermsCondition';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy/policy' element={<PrivacyPolicy />} />
        <Route path='/terms/condition' element={<TermsCondition />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
