import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import './short.css'


const validate=values=>{
    const error={}

    if(!values.longUrl)
      {
          error.longUrl="URL is required"
      }

      return error;
}

export default function ShortenUrl(){

    const [url,setUrl] =useState({
        longUrl:"",
        shortUrl:""
    })
      
    const formik=useFormik({
             initialValues:{
                 longUrl:""
             },
             validate,
             onSubmit:values=>{
                shortUrl(values)
             },
    })

     const shortUrl=async (values)=>{
           
              await axios.post('https://assign-mentor-fullstack.herokuapp.com/shorten',values)
              .then((res)=>{
                  console.log(res)
                setUrl({
                    longUrl:res.data.longUrl,
                    shortUrl:res.data.shortUrl
                })
              })
     } 

    return(
        <div>
             <p className="fs-2 text-danger mt-5">Shorten URL</p>
            <form onSubmit={formik.handleSubmit} className='shortenURL'>
                <p className="fs-3 text-secondary">Paste the URL to be shortened</p>

                <input type='text' name='longUrl' placeholder="paste URL" id='long-url' onChange={formik.handleChange}  value={formik.values.longUrl} onBlur={formik.handleBlur}></input>

                  {formik.touched.longUrl && formik.errors.longUrl ?<div className="fs-5 text-danger">{formik.errors.longUrl}</div> :null}

                <button type='submit' className="short-button bg-primary">Shorten URL</button>
            
            </form>

            {
                (url.shortUrl) ?
                 <div>
                   <p className="fs-4 text-center mt-4">Short Url : {url.shortUrl}</p>
                   <p className="fs-4 text-center">Long Url :{url.longUrl}</p>
                </div>
                : null

              }   
        </div>
    )
}