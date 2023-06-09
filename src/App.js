import './App.css';
import 'flowbite';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
