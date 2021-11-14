import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';


const Login = () => {
    const { signInWithGoogle, setUser, setIsLoading, authError, user, isLoading, loginUser } = useAuth();
    const history = useHistory();
    const location = useLocation()

    const url=location.state?.from || '/home'
    
    const handleGoogleSignin = () => {
        signInWithGoogle()
        .then((res) => {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
            
        })
        .catch(err => console.log(err))
        .finally(()=>{
        setIsLoading(false)
        })
        
    };
    const handleLoginSubmit = e =>{
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
        alert('submitted')
        history.push(url)
        
    }

    const handleOnChange = e =>{
        const field = e.target.name
        const value = e.target.value
        console.log(field,value)
        const newLoginData = {...loginData};
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    const [loginData, setLoginData] = useState({})

    return (
        <div className='container'>
            {
                isLoading && <Spinner animation="border" variant="danger" style={{ margin: '20px' }} />
            }

            {
                authError && <h4 className='text-danger m-3'>{authError}</h4>
            }
            <Header></Header>
            <br />
            <h2>Please Login</h2>
            <div className='row'>
                <form onSubmit={handleLoginSubmit} className='col-md-6 border border-1 rounded m-auto'>
                    <div class="my-3 mx-1">
                        {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                        <input onChange={handleOnChange} name="email" type="email" className="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 mx-1">
                        {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
                        <input  onChange={handleOnChange} name="password" type="password" className="form-control" placeholder="Enter Password" id="exampleInputPassword1"/>
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className ="form-check-label" for="exampleCheck1"> Not registered? Create Account</label>
                    </div> */}
                    <button type="submit" className="btn btn-success mb-3">Login</button>
                </form>
            </div>
            <br />
            <NavLink to="/register"> Not registered? Create Account</NavLink>
            <br />
            {/* google sign hided */}
            {/* <div className='bg-light m-3 p-3'>
                <h4> Sign in with Google ! </h4>
                <button onClick={handleGoogleSignin} className="btn btn-warning m-2">Google Sign In</button>
            </div> */}

        </div>
    );
};

export default Login;