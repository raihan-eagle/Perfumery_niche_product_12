import { stringify } from '@firebase/util';
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const[email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleEmail = e =>{
        e.preventDefault()
        const user = {email}
        console.log(email)
        fetch('http://localhost:5000/users/admin',{
            method : 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true)  
            }
            console.log(success)
        })
    }
    return (
        <div>
            <h3>make admin</h3>
            <Form onSubmit={handleEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={handleOnBlur}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Make Admin
                </Button>
            </Form>
            {success &&  <Alert variant='success'>
                    Make Admin Successful!
                  </Alert>}
        </div>
    );
};

export default MakeAdmin;