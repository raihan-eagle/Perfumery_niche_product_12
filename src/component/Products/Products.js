import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';




const Products = () => {
    
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
    
    const slicedProducts = products.slice(0,6)

    return (
        
        <div className='container' id='products'>
            <br />
            {isLoading ? <br /> : <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />}
            <div className='p-md-3'></div>
            <h1 className='fw-bold'> <span className='text-warning'>Elegent</span> Products</h1>
            <br />
            <h4 className='fw-light fst-italic'>For almost two decades we have been providing our customers with all fragrance products to their complete satisfactions and at competitive prices. Founded in Dhaka in the year 1992, today we operate in the network from Asia to MiddleEast</h4>
            <br />
            <div className='p-md-3'></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                slicedProducts.map(product=><Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
            
            </div>
            <br />
        </div>
        
    );
};

export default Products;