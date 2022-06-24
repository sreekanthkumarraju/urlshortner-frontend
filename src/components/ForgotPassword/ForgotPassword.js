import React, { useState } from "react";
import { useFormik } from 'formik';
import axios from 'axios';
import './forgot.css'



export default function ForgotPassword(){
    const [messgae,setMessage]=useState('')
    const [error,setError]=useState('')

    const validate=values=>{
        const error={}
           
        if(!values.email)
        {
            error.email='Email is required'
        }

      return error; 

    }

    const formik=useFormik({
        initialValues:{
        email:''
        },
        validate,
        onSubmit:values=>{
            verifyEmail(values)

        },
    })
    
    const verifyEmail=async (values)=>{

        await axios.post('http://localhost:5080/forgotpassword',values)
         .then((res)=>{
             setMessage(res.data.message)
             setError(res.data.errors)
         })
         .catch((err)=>{
             console.log(err)
         })

    }

    return(
        <div>
         
         <form onSubmit={formik.handleSubmit} className='forgot-password'>
             <p className="forgot-text">Enter an Email which is associated with this account. we will send you an link to reset your password</p>

            <label id='enter-email'>Enter Email</label>
            <input type='email' name='email' id='email-verify' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
            { formik.touched.email && formik.errors.email?<div className="fs-5 text-danger ms-5">{formik.errors.email}</div>:null}
           

            <button type='submit' id='verify-button' className="bg-primary text-white">Verify Email</button>

              <p  className="fs-5 text-danger ms-5">{error}</p>
              <p  className="fs-3 text-secondary ms-5">{messgae}</p>

         </form>

 
        </div>
    )
}


