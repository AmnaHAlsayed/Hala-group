import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar ,Nav ,NavDropdown ,Form,FormControl,Button, Container, NavbarBrand }from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

 
//import  './NavLinks.css'
const NavLinks =props=>{
return (
   
     
    <Navbar   className ="container  justify-content-center"expand="lg" bg="dark" variant="dark">
    
   
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/ourservices">OurServices</Nav.Link>
        <Nav.Link href="/career">Career</Nav.Link>
        <Nav.Link href ="/contact">Contact</Nav.Link>
      </Nav>
   
   
 
  </Navbar>
 


    //<ul className="nav-links">
       // <li><NavLink to="/" exact>Home</NavLink></li>
       // <li><NavLink to="/">Our Service</NavLink></li>
       // <li><NavLink to="/">Careers</NavLink></li>
       // <li><NavLink to="/">Contact</NavLink></li>
   // </ul>
);

};
export default NavLinks;
