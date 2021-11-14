import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
        // .finally(() => setLoading(false))
    },[])

    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res=>res.json()).then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Confirm Delete the service')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining)
            }            
        })
    }
    return (
        <div className='container mt-2'>
            {
                services.map(service=><div
                key={service._id} className='w-75 bg-dark text-light m-auto mb-3 d-flex justify-content-around align-items-center'
                >
                <img className='m-1' style={{width: '55px', height:'30px'}} src={service.img} alt=''/>
                <h6 className='mx-1'>{service.name}</h6>
                <button className='btn btn-danger p-1' onClick={()=>{handleDelete(service._id)}}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;