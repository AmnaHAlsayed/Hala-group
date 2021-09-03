import React from 'react';
import {Navbar,Nav,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFollow from './SocialFollow';
import './Footr.css';
import img from './img.jpg'

const Footr =()=>{
return(
<Navbar className="footr justify-content-end" sticky="bottom"   expand="sm" bg="dark" variant="dark"height="50px" >
<Nav.Item>
      <Nav.Link href="/home"><Image src={img} alt ="logo" height="100px"width="100px"/></Nav.Link>
    </Nav.Item>
   
    <SocialFollow/>
  
    
</Navbar>
);
};
export default Footr;