import React from "react";
import Navbar from '../components/navbar/Nav';
import "../assets/css/style.css"
import MyCarousel from '../components/carrusel';



export const Productos = () => {
    return (

        <div className="boody1">
            <Navbar />
            <MyCarousel />
            <h2>Estas en Productos</h2>
        </div>

    );
}

export default Productos;