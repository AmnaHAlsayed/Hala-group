
import React from 'react';
import {BrowserRouter  as Router,Route ,Redirect , Switch  } from 'react-router-dom';
import './Pages/OurServices';
import Logo from './compnents/Logo';
import './App.css';
import NavLinks from './compnents/NavLinks';
import Footr from './compnents/Footr'



//import Navigtion from './compnents/Navigtion';
import Home from './Pages/Home';
import OurServices from './Pages/OurServices';
import Contact from './Pages/Contact';
import Career from './Pages/Career';

function App() {
  return (
   <div className=" container-fluid  style bg-dark">
    <Router >
    <header  className=" App-header ">
  <Logo/>
  <br/>
  
  <NavLinks/>

 </header>
<body className=".App-body"></body>
    <Switch>
    
      <Route  path ="/" exact><Home/></Route>
      
      <Route  path ="/ourservices"  exact> <OurServices/></Route>
      <Route  path ="/contact" exact><Contact/></Route>
      <Route  path ="/career" exact><Career/></Route>
      
      <Redirect to= "/" />
   
  </Switch>
       

   </Router>
    </div>
  );
};

export default App;
