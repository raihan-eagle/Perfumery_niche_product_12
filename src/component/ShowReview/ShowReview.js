import React from 'react';
import { Card} from 'react-bootstrap';

const ShowReview = props => {

    const {name, email, description, rating} = props.review
    return (        
        <div id='review'>
            <Card>
                <Card.Header className=' bg-success text-white'>Email:  {email}</Card.Header>
                <Card.Body>
                    <Card.Title className='fst-italic text-success'> "{description}"</Card.Title>
                    <br />
                    <img className='rounded' src="https://i.ibb.co/tmJzS3r/image-4.png" alt="" style={{ height: '58px', width: '78px' }} />
                    <Card.Text >
                    -{name}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Card.Header className='text-success'>Rating: {rating} <img style={{ height: '18px', width: '18px' }} src='https://i.ibb.co/GCZZChZ/image-1.png' alt=''></img> </Card.Header>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowReview;