import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ActivateUser(){

    let {token}=useParams()
    let [message,setMessage]=useState('')
    let [error,setError]=useState('')


     useEffect(()=>{
          
        console.log(token)
        if(token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('https://assign-mentor-fullstack.herokuapp.com/activate-user', {token})
                    console.log(res)
                    setMessage(res.data.message)
                    setError(res.data.errors)
                } catch (err) {
                   
                }
            }
            activationEmail()
        }

     },[token])

    return(
     
        <div>
             <p>{message}</p>
             <p>{error}</p>
        </div>
    )
}