
import './Contact.css';
import {Image} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';





import React, { Component } from 'react';
import location from './main-maintenance/location.PNG';
import Footr from '../compnents/Footr';




const Contact =()=>{
    return (
        <div className="Contact container-fluid">
   <div class="Info">
   <Image  src={location} alt="location"  width="100%" className="location"/>
   <br/>
   <br/>

      <h3>Address:</h3>
      <br/>
      <h4>Al Wahda Commercial Tower Royal Business Centre 11th Floor - Abu Dhabifloor No. 11</h4>
     <br/>
      <h3>Contact Email:</h3>
      <br/>
      <h4>amna@gmail.com</h4>
      <br/>
      <h3>Mobil No.</h3>
      <br/>
      <h4>0563345633</h4>
    
      
         </div>
         <Footr/>
      </div>
    );
  }
export default Contact;

