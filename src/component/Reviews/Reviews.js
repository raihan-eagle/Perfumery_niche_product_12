import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ShowReview from '../ShowReview/ShowReview';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        setIsloading(false)
        fetch('https://powerful-depths-82675.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
        // setIsloading(true)
        .finally(() => setIsloading(true))
    },[])

    return (
        <div className='container' id='reviewback'>
            <div className='p-md-3'></div>
            {isLoading ? <br /> : <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />}
            <div className='p-md-3 bg-danger'></div>
            <div className='p-md-3'></div>
            
            <h1 className='fw-bold'> <span className='text-danger'>Happy</span> CLIENTS</h1>
            <br />
            <h4 className='fw-light'>This is what makes us thrive for more. Our precious customer what force us to improve everyday</h4>
            <img src="https://i.ibb.co/Kykv7dj/Happy-designstyle-happy-m.png" alt="" />

            <br />
            <div className='p-md-3'></div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.map(review=><ShowReview
                        key={review._id}
                        review={review}
                        
                        ></ShowReview>)
                    }
                    </div>
        </div>
    );
};

export default Reviews;