import './App.css';
import 'flowbite';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Shared/Footer';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
