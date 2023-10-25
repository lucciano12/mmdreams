// src/components/Home.js
import React from 'react';
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Nav';
import MyCarousel from '../components/carrusel';

import Bodyhome from '../components/bodyhome';

import "../assets/css/style.css"



function Inicio() {
    return (
        <div className='boody1'>
            <Navbar />
            <MyCarousel />
            <Bodyhome />
            <Footer/>
        </div>
    )
}

export default Inicio;
