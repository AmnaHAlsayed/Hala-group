import React from 'react';
import {Carousel ,Image } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footr from '../compnents/Footr';
import pic3 from './pic3.jpg';
import './Home.css';
import p1 from './main-maintenance/p1.png';
import p2 from './main-maintenance/p2.png';
import p3 from './main-maintenance/p3.gif';
import { render } from '@testing-library/react';

import SocialFollow from '../compnents/SocialFollow';
const Home = () =>{

    return(
      <React.Fragment  className=" style   bg-dark text-white">

       <div className="images container-fluid ">
         
       <Image width="100%" height="auto"
       src={require('./main-maintenance/pic22.jpg').default}
       alt="pic1"
     />
     <SocialFollow/></div>
  
<div className=" About ">
    <h2>About Us</h2>
    <div className="row">
        <div className="col-sm-4">
    <Image src={require('./main-maintenance/pic1.jpg').default} alt="halagroup" width="100%" height="auto"/></div>
    <div className="col-sm-8">
    <p >the hala group ..................
        
        The following example will center the navigation bar on medium, 
        large and extra large screens.
         On small screens it will be displayed vertically and left-aligned
          (because of the .navbar-expand-sm class):.</p></div>
</div> </div>

  <div className="  bg-image"><Image src={require('./main-maintenance/pic15.jpg').default} alt="piv" width ="100%" height="auto" /></div>
  <div className="bg-text">
  <h2>What We do ?</h2>
  <div className="row">
<div className="col-sm-4">
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require('./main-maintenance/pic16.jpg').default} alt="Paris" width="300px" height="200px" />
</div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div></div>

  </div>
  <div className="col-sm-4">
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require('./main-maintenance/pic17.jpg').default} alt="Paris" width="300px" height="200px" />
</div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div></div>

  </div>
  <div className="col-sm-4">
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require('./main-maintenance/pic18.jpg').default} alt="Paris" width="300px" height="200px" />
</div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div></div>

  </div>

</div>
<br/>
<div className="row">
<div className="col-sm-4">
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require('./main-maintenance/pic19.jpg').default} alt="Paris" width="300px" height="200px" />
</div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div></div>

  </div>
  <div className="col-sm-4">
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require('./main-maintenance/pic20.jpg').default} alt="Paris" width="300px" height="200px" />
</div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div></div>

  </div>
  <div className="col-sm-4">
  
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src={require('./main-maintenance/pic21.jpg').default} alt="Paris" width="300px" height="200px" />
</div>
    <div class="flip-box-back">
      <h2>Paris</h2>
      <p>What an amazing city</p>
    </div>
  </div></div>

  </div>

  
</div>


</div>
<div className="main-maintenance container-fluid">
  <section>
  <div className="form">
  <div className="widget">
      <a href="/ourservices">
<Image src={p1} alt="Carpentary" height="auto"width="100%" /></a>
<p>Ac Maintenance</p>
    </div>
    <div className="widget">
      <a href="/ourservices">
<Image src={p2} alt="Carpentary"height="auto"width="100%" /></a>
<p>Ac Maintenance</p>
    </div>
    <div className="widget">
      <a href="/ourservices">
<Image src={p3} alt="Paintaing"height="auto"width="100%" /></a>
<p>Paintaing</p>
    </div>
</div></section>
</div>
 <br/>
  <Footr/>

</React.Fragment>
  );
  
};
export default Home ;