import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){

    return(

        <div>
            <ul class="nav justify-content-center">
  
               
                <li class="nav-item">
                   <a class="nav-link active" aria-current="page" href="#">Features</a>
                </li>
  
               <Link to='/login'>
                   <li class="nav-item">
                      <a class="nav-link" >Login</a>
                   </li>
              </Link>

                <Link to='/register'>
                  <li class="nav-item">
                    <a class="nav-link" >Sign Up</a>
                  </li>
                </Link>
  
                <li class="nav-item">
                   <a class="nav-link disabled"></a>
                </li>
        
            </ul>
        
        </div>
    )
}