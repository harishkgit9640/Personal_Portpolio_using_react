import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Error from './routes/Error';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import './App.css';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
