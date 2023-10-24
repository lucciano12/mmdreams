import React from 'react';
import Divider from '@mui/material/Divider';
import lanitas from '../assets/images/lanas.png';
import palitos from '../assets/images/palitos.png';
import monita from '../assets/images/monita.png';
import styles from './comocreamos.module.css'


const Comocreamos = () => {
    return (
        <div>
            <Divider style={{ height: '2px', marginTop: '60px', marginBottom: '30px' }} />
            <div className={styles.container1}> {/* Usa los estilos del archivo CSS modular */}
                <div className={styles.cardTextoIndex}> {/* Usa los estilos del archivo CSS modular */}
                    <div className={styles.cardBody}> {/* Usa los estilos del archivo CSS modular */}
                        <div className={styles.tituloGrande}>¿Qué Quiénes Somos?</div> {/* Agrega el título aquí */}
                        Momo dreams nace con el deseo de ser tu compañero en las noches más largas y en tus días en los que necesitas un abrazo reconfortante. Cada uno de nuestros amigurumis es tierno, suave y creado con amor, para asegurarnos de que nunca te sientas solo o sola. Te invitamos a descubrir la magia de abrazar a un Momo dreams y encontrar consuelo en su ternura tejida con cariño.
                    </div>
                </div>
            </div>

            <Divider style={{ height: '2px', marginTop: '30px', marginBottom: '30px' }} />

            <div className={styles.tituloCardExtension} id="Cejas"> {/* Usa los estilos del archivo CSS modular */}
                <h2>Proceso de creación de nuestros amigurumis</h2>
            </div>

            <CenteredImageTextSection

                image={lanitas}
                text='"Todos nuestros amigurumis son tejidos con diferentes tipos de lanas y las puedes escoger a elección."'
                textPosition="right"
            />

            <CenteredImageTextSection
                image={palitos}
                text='"Nuestro amigurumis son hechos con los mejores palillos para tener un buen resultado."'
                textPosition="left"
            />

            <CenteredImageTextSection
                image={monita}
                text='"Cada uno de los amigurumis son creados con mis propias manos, por lo cual cada uno es diferente y tiene un toque especial."'
                textPosition="right"
            />
        </div>
    );
};

const CenteredImageTextSection = ({ image, text, textPosition }) => {
    return (
        <div className={styles.contenedor}> {/* Usa los estilos del archivo CSS modular */}
            {textPosition === 'left' && (
                <div className={styles.texto}> {/* Usa los estilos del archivo CSS modular */}
                    <p>{text}</p>
                </div>
            )}
            <img src={image} alt="Imagen" className={styles.imagen} /> {/* Usa los estilos del archivo CSS modular */}
            {textPosition === 'right' && (
                <div className={styles.texto}> {/* Usa los estilos del archivo CSS modular */}
                    <p>{text}</p>
                </div>
            )}
        </div>
    );
};

export default Comocreamos;
