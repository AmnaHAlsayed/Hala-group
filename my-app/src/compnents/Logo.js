import React from 'react';
import './Logo.css';
import img from  './img.jpg';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = props =>{

return (<div  className="logoStyle "><Image src= {img} alt ="Hala Group"  fluid width="100" height= "100" /></div>
);

};


export default Logo ;





