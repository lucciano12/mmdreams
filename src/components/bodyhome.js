import React from 'react';
import Divider from '@mui/material/Divider';
import lanitas from '../assets/images/lanas.png';
import palitos from '../assets/images/palitos.png';
import monita from '../assets/images/monita.png';
import "../assets/css/comocreamos.css"


const bodyhome = () => {
    return (
        <div>
            <Divider style={{ height: '2px', marginTop: '60px', marginBottom: '30px' }} />
            <div className="container1">
                <div className="tituloGrande">
                    ¿Quiénes Somos?
                </div>
                <div class="depth-effect">
                    <div className="contenido">
                        Momo dreams nace con el deseo de ser tu compañero en las noches más largas y en tus días en los que necesitas un abrazo reconfortante. Cada uno de nuestros amigurumis es tierno, suave y creado con amor, para asegurarnos de que nunca te sientas solo o sola. Te invitamos a descubrir la magia de abrazar a un Momo dreams y encontrar consuelo en su ternura tejida con cariño.
                    </div>
                </div>
            </div>

            <Divider style={{ height: '2px', marginTop: '30px', marginBottom: '30px' }} />

            <div className="tituloGrande">
                Proceso de un amigurumi
            </div>
            <div className="contenedor-horizontal"> {/* Utiliza una clase de CSS para mostrar elementos en línea */}
                <div className="imagen-con-texto">
                    <img src={lanitas} alt="Imagen" />
                    <p>'Todos nuestros amigurumis son tejidos con diferentes tipos de lanas y las puedes escoger a elección.'</p>
                </div>
                <Divider orientation="vertical" flexItem /> {/* Divider vertical */}
                <div className="imagen-con-texto">
                    <img src={palitos} alt="Imagen" />
                    <p>'Nuestro amigurumis son hechos con los mejores palillos para tener un buen resultado.'</p>
                </div>
                <Divider orientation="vertical" flexItem /> {/* Divider vertical */}
                <div className="imagen-con-texto">
                    <img src={monita} alt="Imagen" />
                    <p>'Cada uno de los amigurumis son creados con mis propias manos, por lo cual cada uno es diferente y tiene un toque especial.'</p>
                </div>
            </div>
        </div>
    );
};

export default bodyhome;
