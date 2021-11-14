import React from 'react';
import { Nav } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
            <br />
            <br />
            <div className='d-md-flex justify-content-md-around bg-warning p-3 '>
                        <div className='text-dark text-center'>
                            <h4>Partners</h4>
                            <img src="https://i.ibb.co/GFwNqJP/download.jpg" alt="" />
                            
                            <br />
                            <img src="https://i.ibb.co/PTcPVhS/Respawn2.webp" alt="" />
                        </div>
                        <div className='text-dark text-center'>
                            <h4 >Contact</h4>
                            <p className='text-light bg-secondary p-2 rounded-3 shadow'>Perfumery <br /> Tel: 281.572.0485 <br /> hello@travel.com <br /> 801 Orchid Drive 801 Orchid Drive<br /> Perfumery <br /> Tel: 281.572.0485 <br />Naples, FL 34101 801 Orchid Drive</p>
                        </div>
                        <div className='text-dark text-center'>
                            <h4>Partners</h4>
                            <img src="https://i.ibb.co/jDbx3Sc/Hpay2.webp" alt="" />
                            <br />
                            <img src="https://i.ibb.co/PTcPVhS/Respawn2.webp" alt="" />
                            <br />
                            <img src="https://i.ibb.co/b78DzKq/image.png" alt="" />
                        </div>
            </div>
                    <div className ="bg-info d-flex justify-content-center align-items-center">
                                    <Nav.Link className="links" as={HashLink} to="/home#home">Home</Nav.Link><span> | </span>
                                    <Nav.Link className="links" as={HashLink} to="/home#products">Services</Nav.Link> <span> | </span>
                                    <Nav.Link className="links" as={HashLink} to="/home#aboutus">AboutUs</Nav.Link> <span> | </span>
                                    <Nav.Link className="links" as={HashLink} to="/home#review"> Review </Nav.Link> <span> | </span>
                                    <Nav.Link className="links" as={HashLink} to="/explore"> Explore </Nav.Link>
                        
                    </div>
            <h6 className='fw-light text-center bg-dark text-white m-0 pb-3'> © 2021 Perfumery </h6>
            
        </div>
        </div>
    );
};

export default Footer;

