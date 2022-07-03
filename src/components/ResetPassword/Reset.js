import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './reset.css'



const validate=values=>{
    const error={}

    if(!values.EnterPassword)
      {
           error.EnterPassword='Password is required'
      }


      if(values.EnterPassword!==values.ConfirmPassword)
       {
           error.ConfirmPassword='passwords didnot matched '
       }

       return error;
}

export default function Reset(){
    const [error,setError]=useState('')
    const [message,setMessage]=useState('')

     const params=useParams()

        const formik=useFormik({
             initialValues:{
               EnterPassword:'',
               ConfirmPassword:""
             },
             validate,
             onSubmit:values=>{
               console.log(values)
               reset(values)
             }
        })   

        let url=`https://assign-mentor-fullstack.herokuapp.com/reset-password/${params.id}/${params.token}`
        const reset=async (values)=>{
            console.log(values)
             await axios.post(url,values)
             .then((res)=>{
                setMessage(res.data.message)
                setError(res.data.errors)
             })
             .catch((err)=>{
                 console.log(err)
             })
        }

        useEffect(()=>{

           const validateUrl=async()=>{

             await  axios.get(url)
             .then((res)=>{
                setError(res.data.errors)
             })
             .catch((err)=>{
                     console.log(err)
             })

            }

            validateUrl()
        },[params,url])

    return(
        <div>
            {  error ? <div className="page-error text-danger"> {error} </div> :
              <div>
                <p className="fs-2 mt-5">New Password</p>
            <form onSubmit={formik.handleSubmit} className='resetpassword'>
               
                <label className="enter-password">Enter Password</label>
                  <input type='password' name='EnterPassword' id='enter-password' value={formik.values.EnterPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> 
                  { formik.touched.EnterPassword && formik.errors.EnterPassword ? <div className="validation-error text-danger">{formik.errors.EnterPassword}</div>:null}
                
                <label className="confirm-password">Confirm Password</label>
                 <input type='password' name='ConfirmPassword' id='forgot-password' values={formik.values.ConfirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                 { formik.touched.ConfirmPassword && formik.errors.ConfirmPassword ? <div className="validation-error text-danger">{formik.errors.ConfirmPassword}</div>:null}

                 <button type='submit' id='reset-button' className="bg-primary text-white">Reset Password</button>

                 <p className="success-message text-secondary fs-3">{message}</p>
            </form>
            </div>
              }
        </div>
    )

}