import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

// https://i.ibb.co/RBLMwPg/gr-1.jpg
// https://i.ibb.co/K6YZbVZ/bb-1.jpg
// https://i.ibb.co/Y3Kx4LW/ww-1.jpg
// https://i.ibb.co/PNgPT0Z/dw-1.jpg
// https://i.ibb.co/0s6jVFS/gb-1.jpg
// https://i.ibb.co/ThJVL17/pw-1.jpg
// https://i.ibb.co/XC42Hn9/db-1.jpg
// https://i.ibb.co/r63bGfT/ab-1.jpg

const AddService = () => {

        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
            console.log(data);
            axios.post('http://localhost:5000/services', data)
            .then(res=>{
                if(res.data.insertedId){
                    alert('Data Added Successfully ! ');
                    reset();
                }
                console.log(res);
            })
            
        };
    return (
        <div className='add-service'>
            <h1>Add a Service here!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
            <input {...register("shortdetails", )} placeholder='Details in short 20-30 words'/>
            <textarea {...register("description", )} placeholder='Description'/>
            <input {...register("quantity", )} placeholder='6ml/10 ml'/>
            <input {...register("img", )} placeholder='Image-url'/>
            <input type="number" {...register("price", )} placeholder='Price' />
            <input className='btn btn-success' type="submit" />
            </form>
            <button onClick={()=>reset()} className='btn btn-warning'>Reset input field</button>

        </div>
    );
};

export default AddService;