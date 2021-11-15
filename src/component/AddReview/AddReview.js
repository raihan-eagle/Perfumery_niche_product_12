import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddReview.css'
import useAuth from '../../hooks/useAuth';

const AddReview = () => {

    const {user} = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://powerful-depths-82675.herokuapp.com/review', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Review Added Successfully ! ');
                reset();
            }

            console.log(res);
        })
        
    };

    return (
        <div className='review'>
            <h1>Please share your review here!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
            <input {...register("email", { required: true, maxLength: 40 })} value={user.email} placeholder='Email' />
            {/* <input {...register("shortdetails", )} placeholder='Details in short 20-30 words'/> */}
            <textarea {...register("description", { required: true} )} placeholder='Review'/>
            {/* <input {...register("packages", )} placeholder='2 Night - 3 Days'/>
            <input {...register("img", )} placeholder='Image-url'/>*/}
            <input type="number" {...register("rating", { required: true, min: 1, max: 5  } )} placeholder='Rating (1-5 Only)' /> 
            <input className='btn btn-success' type="submit" />
            </form>
            <button onClick={()=>reset()} className='btn btn-warning'>Reset input field</button>

        </div>
    );
};

export default AddReview;