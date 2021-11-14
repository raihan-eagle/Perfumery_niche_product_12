import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='background' id='aboutus'>
            <div className='bg-danger p-3'></div>
            <h1 className='fw-bold m-3 text-danger'>About Perfumery</h1>
            <br />
            <h5 className='fst-italic fw-lighter m-3'>It is said that scent is one of our strongest senses, and the right fragrance can make a bold statement that people are unlikely to forget anytime soon. With that in mind, here are the most expensive perfumes from around the world, designed to create a long-lasting impression</h5>
            <br />
            <div className='d-md-flex justify-content-md-center align-items-md-center'>
            <img className='img-fluid' src="https://i.ibb.co/pJMjSYS/d8ca3675309589-5c48db9253464-1.jpg" alt="" />
            <p className='fst-italic fw-lighter m-3 p-3'>Perfumery creates fragrances to offer his fans an olfactive experience of his world. Conveying his values and lifestyle, Perfumery’s fragrances illustrate his passion, winning mindset and inspiration. Fragrances are part of his wide curiosity of always discovering new things, universes and grow by always renewing himself and open to new horizons. Adapted to any occasion, season and mood, Perfumery’s fragrances enable his fans to wear the sensorial essence of their style. Defining personal statement, as a final dressing touch for a special night occasion or a day-time casual style, every fragrance inspires the fans for the pursuit of self-belief, excellence and dedication.</p>
            </div>
        </div>
    );
};

export default About;