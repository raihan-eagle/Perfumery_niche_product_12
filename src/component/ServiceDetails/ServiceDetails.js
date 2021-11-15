import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Header/Header';

const ServiceDetails = () => {
    const {serviceid} = useParams()
    const [service, setService] = useState([])
    const [status, setStatus] = useState()
    useEffect(()=>{
        fetch(`https://powerful-depths-82675.herokuapp.com/services/${serviceid}`)
        .then(res=>res.json())
        .then(data => setService(data))
        
    },[serviceid])
    // serviceid added for clearing warning

    const {user,admin} = useAuth();

    const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
            axios.post('https://powerful-depths-82675.herokuapp.com/orders', data)
            .then(res=>{
                if(res.data.insertedId){
                    alert('Order Added Successfully ! ');
                    reset();
                    setStatus(true)
                }
                console.log(res);
                console.log(status)
            })
            
        };
    return (
        <div>
            <div className='container'>
                <Header></Header>
                <br />
                <h1 className="fw-bold">{service.name} is a great choice for you</h1>
                <div className='row'>
                    <div className = 'col-md-7 m-auto'>
                        <div className="card h-100 p-3 m-3">
                            <img src={service.img} className="card-img-top img-fluid w-50 m-auto"  alt="..."/>
                            <div className="card-body p-3 m-3">
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">{service.description}</p>
                            </div>
                            <div className="card-footer">
                            <small className="">Quantity : {service.quantity}</small> <span> | </span>
                            <small className="">Price : {service.price}</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* {setStatus? <h3 className='text-danger'>Pending</h3> : */}
            <div className='add-service'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input value={user.displayName} {...register("name", { required: true, maxLength: 25 })} placeholder='Name' />
            <input value={user.email}{...register("email", { required: true, maxLength: 40 })} placeholder='Email' /> 
            <input value={serviceid} {...register("id")} placeholder='Service-ID' />
            <input {...register("ordername", { required: true})} placeholder='Enter Order Name' />             
            <textarea {...register("location", )} placeholder='Delivery-location'/>
            <input type="number" {...register("mobile", { required: true})} placeholder='Contact Number' />
            
            {admin ? <h5 className='bg-danger p-2'>Admin can't Place Order</h5> : <input type="submit" value='Place Order' className='btn btn-danger' /> }
            </form>
            </div>
        </div>
    );
};

export default ServiceDetails;