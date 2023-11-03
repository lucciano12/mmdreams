import React from "react";
import Navbar from '../components/navbar/Nav';
import "../assets/css/style.css"
import MyCarousel from '../components/carrusel';
import Producto from "../components/Producto/Productos";


import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Creacion del Item
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Productos = () => {
    return (

        <div className="boody1">
            <Navbar />
            <MyCarousel />
            <h2>Amigurumis</h2>


            <Grid container spacing={8}>
                <Grid item xs={3}>
                    <Producto />
                </Grid>
                <Grid item xs={3}>
                    <Producto />
                </Grid>
                <Grid item xs={3}>
                    <Producto />
                </Grid>
                <Grid item xs={3}>
                    <Producto />
                </Grid>
            </Grid>

        </div>

    );
}

export default Productos;


