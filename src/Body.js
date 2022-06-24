import React from "react";
import {Routes,Route} from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LoginUser from './components/Login/LoginUser';
import RegisterUser from './components/Register/RegisterUser';
import ActivateUser from './components/Register/ActivateUser';
import Reset from './components/ResetPassword/Reset';
import ShortenUrl from './components/URLService/ShortenURL';
import Navbar from "./Navbar";


export default function Body(){
    return(
        <div>

   

    <Routes>  
     
     <Route path='/' element={<LoginUser/>}></Route>
     <Route path='/register' element={<RegisterUser/>}></Route>
     <Route path='/login' element={<LoginUser/>}></Route>
     <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
     <Route path='/activate-user/:token' element={<ActivateUser/>}></Route> 
     <Route path='/reset-password/:id/:token' element={<Reset/>}></Route> 
     <Route path='/shorten' element={<ShortenUrl/>}></Route> 
    
    </Routes>
        
        </div>
    )
}