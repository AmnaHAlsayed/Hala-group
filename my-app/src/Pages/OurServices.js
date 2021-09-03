import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion, Card ,Button,
    Image,Carousel}from 'react-bootstrap';

import Footr from '../compnents/Footr';
const OurServices =()=>{
    return(
        <body className=" OurServices">
    <div className=" container-fluid bg-dark">

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header className="text-center">
      <Accordion.Toggle as={Card.Header} eventKey="0" flush>
       Carpentary
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> <Carousel >
    <Carousel.Item interval={1000}>
      <Image 
        className="d-block w-100"
    
        src={require('./main-maintenance/pic14.jpg').default }
        width="500" height="500"
        slid= "20232a"
        bg="20232a"
      />
     
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <div className="images container fluid "><Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic15.jpg').default} 
        width="500" height="500"
        slid= "20232a"
      bg="20232a"
        alt="Second slide"
      /></div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic16.jpg').default}
        width="500" height="500"
        slid= "20232a"
      bg="20232a"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic17.jpg').default} 
        slid= "20232a" width="500" height="500"
      bg="20232a"
        alt="Second slide"
      />
    </Carousel.Item>
    
   
   
  </Carousel></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header className="text-center">
      <Accordion.Toggle as={Card.Header} eventKey="1" flush>
       Maintenance
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body> <Carousel >
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
       
        src={require('./main-maintenance/pic11.jpg').default}
        width="500" height="500"
       text="first"
        slid= "20232a"
       bg="20232a"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic12.jpg').default} 
        width="500" height="500"
        slid= "20232a"
      bg="20232a"
        alt="Second slide"
      />
      
     
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic13.jpg').default} 
        width="500" height="500"
        slid= "20232a"
      bg="20232a"
        alt="Second slide"
      />
      
     
    </Carousel.Item>
   
  </Carousel>
  </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header className="text-center">
      <Accordion.Toggle as={Card.Header}  eventKey="2">
       Installition
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Carousel >
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
       
        src={require('./main-maintenance/pic19.jpg').default}
        width="500" height="500"
       text="first"
        slid= "20232a"
       bg="20232a"
        alt="First slide"
      />
    
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic20.jpg').default} 
        width="500" height="500"
        slid= "20232a"
      bg="20232a"
        alt="Second slide"
      />
     
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Image
        className="d-block w-100"
        
        src={require('./main-maintenance/pic21.jpg').default} 
        width="500" height="500"
        slid= "20232a"
      bg="20232a"
        alt="Second slide"
      />
     
    </Carousel.Item>
  </Carousel></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<Footr/>
    </div></body>
    );


};
export default OurServices;