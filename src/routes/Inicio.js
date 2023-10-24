// src/components/Home.js
import React from 'react';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Nav';
import MyCarousel from '../components/carrusel';

import Comocreamos from '../components/comocreamos';

import "../assets/css/style.css"



function Inicio() {
    return (
        <div className='boody1'>
            <Navbar />
            <MyCarousel />
            <Comocreamos />
            <Footer />
        </div>
    )
}

export default Inicio;
