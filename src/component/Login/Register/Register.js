import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import Header from '../../Header/Header';

const Register = () => {

    const [loginData, setLoginData] = useState({})

    const {user, registerUser, isLoading, authError} = useAuth()

    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password);
        alert('Submitted')
    }

    const handleOnBlur = e =>{
        const field = e.target.name
        const value = e.target.value
        console.log(field,value)
        const newLoginData = {...loginData};
        newLoginData[field] = value
        setLoginData(newLoginData)
    }


    return (
            <div className='container'>
                <Header></Header>
                <br />
                <h2>Please Register</h2>
                {!isLoading && <div className='row'>
                    <form onSubmit={handleLoginSubmit} className='col-md-6 border border-1 rounded m-auto'>
                        <div class="my-3 mx-1">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input onBlur={handleOnBlur} name="name" className="form-control" placeholder="Enter your name" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="my-3 mx-1">
                            {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input onBlur={handleOnBlur} name="email" type="email" className="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 mx-1">
                            {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                            <input onBlur={handleOnBlur} name="password" type="password" className="form-control" placeholder="Enter Password" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 mx-1">
                            {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                            <input onBlur={handleOnBlur} name="password2" type="password" className="form-control" placeholder="Confirm Password" id="exampleInputPassword1" />
                        </div>
                        
                        <button type="submit" className="btn btn-success mb-3">Register</button>
                    </form>
                    <br />
                    <NavLink to="/login"> Already registered? Please Login</NavLink>
                    <br />
                </div>}
                {
                    isLoading && <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />}
                
                {
                    user.email &&   <Alert variant='success'>
                    Registration Successful!
                  </Alert>
                    
                //     <Modal.Dialog>
                //     <Modal.Header closeButton>
                //       <Modal.Title>Registration Successful</Modal.Title>
                //     </Modal.Header> 
                //   </Modal.Dialog>
                }
                {
                    authError && <h4 className='text-danger m-3'>{authError}</h4>
                }


            </div>
    );
};

export default Register;