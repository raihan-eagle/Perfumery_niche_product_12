import React from 'react';
import { Carousel } from 'react-bootstrap';

// https://i.ibb.co/9YL7760/image-3.png
// https://i.ibb.co/xHnLFnd/image-2.png

const Banner = () => {
    return (
        <div>
            <Carousel className="bg-dark mx-md-3 my-2">
                <Carousel.Item>
                    <img
                        className="d-block w-md-50 m-auto img-fluid"
                        src="https://i.ibb.co/9YL7760/image-3.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className ='text-dark'>Calmness and Elegent</h3>
                        {/* <p className ='text-dark'>Your trusted and safe partner.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-md-50 m-auto img-fluid"
                        src="https://i.ibb.co/xHnLFnd/image-2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className ='text-black'>Friends</h3>
                        <p className ='text-black'>Lets adventure with no bounds</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;