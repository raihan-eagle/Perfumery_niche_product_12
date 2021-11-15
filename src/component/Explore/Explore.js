import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import Product from '../Product/Product';




const Explore = () => {
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        setIsloading(false)
        fetch('https://powerful-depths-82675.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        // setIsloading(true)
        .finally(() => setIsloading(true))
    },[])
    
    return (
        
        <div className='container' id='products'>
            <Header></Header>
            {isLoading ? <br /> : <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />}
            <div className='p-md-3'></div>
            <h1 className='fw-bold'> <span className='text-warning'>Explore Our</span> Products</h1><br />
            <h3 className='fw-light fst-italic'>For almost two decades we have been providing our customers with all fragrance products to their complete satisfactions and at competitive prices. Founded in Dhaka in the year 1992, today we operate in the network from Asia to MiddleEast</h3>
            <br />
            <div className='p-md-3 bg-info'></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product=><Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            </div>
        </div>
        
    );
};

export default Explore;