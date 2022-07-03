import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'


const validate=values=>{
    const errors={}

    if(!values.email)
     {
         errors.email='Email is required'
     }


     if(!values.password)
     {
         errors.password='Password is required'
     }


     return errors;
 }


export default function LoginUser(){

       const formik=useFormik({
             initialValues:{
                email:"",
                password:""
             },
             validate,
             onSubmit:values=>{
                verifyUserEmail(values)
             }
       })


       const verifyUserEmail=async (values)=>{
              await axios.post('https://assign-mentor-fullstack.herokuapp.com/login',values)
              .then((res)=>{
                console.log(res)
                window.location = "/shorten";
              })
              .catch((err)=>{
                  console.log(err)
              })
            
                
       }

    return(
        <div>
            
            <form onSubmit={formik.handleSubmit} className='login'>
                <label id='email-label'>Email</label>
                <input type='email' name='email' className='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
                 {formik.touched.email && formik.errors.email ?<div className='fs-5 text-danger'>{formik.errors.email}</div>:null}

    
                <label id='password-label'>Password</label>
                <input type='password' name='password' className='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
                { formik.touched.password && formik.errors.password ?<div className='fs-5 text-danger'>{formik.errors.password}</div>:null}
               
               <button type='submit' id='login-button' className='bg-primary text-white'>Login</button>
            </form>

            <div className='register-forgot'>
              <p id='text-login'>New Here???</p>
              <Link to='/register'>
                <button type='button' id='login-register' className='bg-primary text-white'>Register</button>
               </Link>
               
               <Link to='/forgotpassword'>
                  <button type='button' id='login-forgot' className='bg-primary text-white'>Forgot Password </button>
               </Link>
            </div>
        </div>
    )
}

