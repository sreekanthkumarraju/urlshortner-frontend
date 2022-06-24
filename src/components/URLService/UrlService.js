import React from "react";
import {Route,Routes} from 'react-router-dom';
import ShortenUrl from "./ShortenURL";

export default function UrlService(){
    <div>
        <Routes>
           <Route path='/shorten' element={<ShortenUrl/>}></Route> 
         </Routes>
    </div>
}