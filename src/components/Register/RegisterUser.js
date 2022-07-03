import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css'

const validate=values=>{
  const  errors={}


  if(!values.firstName)
  {
      errors.firstName='FirstName is required'
  }

  if(!values.lastName)
   {
       errors.lastName='Last Name is required'
   }

   if(!values.email)
    {
        errors.email='Email is required'
    }


    if(!values.password)
     {
         errors.password='password is required'
     }

     return errors;
}


export default function RegisterUser(){

   const formik=useFormik({
         initialValues:{
             firstName:"",
             lastName:"",
             email:"",
             password:""

         },
         validate,
         onSubmit:values=>{
          alert(JSON.stringify(values))
          postData(values)
         },

   })
   const postData=async (values)=>{

    await axios.post('https://assign-mentor-fullstack.herokuapp.com/register',values)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

   }

    return(
        <div>

           <form onSubmit={formik.handleSubmit} className='register'>
               <label className='firstname-label'>First Name</label>
               <input type='text' id='firstName' name='firstName' value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
                 { formik.touched.firstName && formik.errors.firstName?<div className='text-danger'>{formik.errors.firstName}</div>:null}
              
               <label className='lastname-label'>Last Name</label>
               <input type='text' id='lastName' name='lastName' value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
                 { formik.touched.lastName && formik.errors.lastName?<div className='text-danger'>{formik.errors.lastName}</div>:null}
               
               <label className='email-label'>Email</label>
               <input type='email' id='email' name='email'  value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
                { formik.touched.email && formik.errors.email ?<div className='text-danger'>{formik.errors.email}</div>:null}
               
               <label className='password-label'>Password</label>
                <input type='password' id='password' name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}></input>
                  { formik.touched.password && formik.errors.password?<div className='text-danger'>{formik.errors.password}</div>:null}

                <button type='submit' className='register-button bg-primary text-white'>Register</button>
           </form>
           
          <div>
           <p className='register-text'>Already a User???</p>
             <Link to='/login'>
                
                <button type='button' className='register-login bg-primary text-white'>Login</button>
            </Link>
        </div>
        </div>
    )
}