import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className='container' id='home'>
            <Header></Header>
            <br />
            <div className='d-flex justify-content-center align-items-center m-2'>
            <img  src="https://i.ibb.co/6tRdJGq/24d1d2f609b03b8094d3659c7706ffb1.png" style={{height:'70px',width:'70px', borderRadius: '25px'}} alt="" />
            <h1 className='fw-bolder text-info' >Perfumery</h1>
            </div>
            <br />
            <div>
                <h4 className='m-2 fst-italic fw-light'>A good perfume doesn't just have a pleasant fragrance, it can serve as an extension of your personality.</h4>
            </div>
            <Banner></Banner>
            <About></About>
            <br />
            <Products></Products>
            <br />
            <Reviews></Reviews>
        </div>
    );
};

export default Home;