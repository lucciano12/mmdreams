import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import familiaImage from '../assets/images/elefante.jpg';
import erizoImage from '../assets/images/erizo.jpg';
import rosadoImage from '../assets/images/sondos.jpg';

const images = [
    {
        image: erizoImage,
        title: 'Título de la Imagen 1',
        middleText: 'Bienvenidos a Momo dreams',
    },
    {
        image: familiaImage,
        title: 'Título de la Imagen 2',
    },
    {
        image: rosadoImage,
        title: 'Título de la Imagen 3',
    },
];

const MyCarousel = () => {
    return (

        <Carousel showThumbs={false} showStatus={false} >
            {images.map((image, index) => (
                <div key={index}>
                    <div className="carousel-image-container">
                        <img src={image.image}
                            alt={image.title}

                            style={{
                                width: "100%",
                                height: "100vh",
                                objectFit: "cover", // Asegura que la imagen se ajuste correctamente
                            }}
                        />
                        {index === 0 && (
                            <div className="carousel-middle-text">{image.middleText}</div>

                        )}
                    </div>

                </div>
            ))}
        </Carousel>


    );
};
export default MyCarousel;
