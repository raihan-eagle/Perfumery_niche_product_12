import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(()=>{
        const url = `https://powerful-depths-82675.herokuapp.com/orders/${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
        .then(console.log(orders))
        // .finally(() => setLoading(false))
    },[])

    const handleDelete = id =>{
        const url = `https://powerful-depths-82675.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(res=>res.json()).then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Confirm Delete the order')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            }            
        })
    }

    return (
        <div>
        <div className='container mt-2'>
            {
                orders.map(order=><div
                key={order._id} className='w-75 bg-light text-success m-auto mb-3 pb-3 rounded-3 '
                >
                <div className='bg-info p-3'></div>
                <br />
                <h6 className='mx-1'>Customer Name : {order.name}</h6>
                <h6 className='mx-1'>Customer Email : {order.email}</h6>
                <h6 className='mx-1'>Ordered Product ID : {order.id}</h6>
                <h6 className='mx-1'>Ordered Product Name : {order.ordername}</h6>
                <h6 className='mx-1'>Mobile : {order.mobile}</h6>
                <button className='btn btn-warning' onClick={()=>{}}>Approve</button>
                <button className='btn btn-danger mx-2' onClick={()=>{handleDelete(order._id)}}>Delete</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default MyOrders;