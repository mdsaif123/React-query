import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Product from './Components/Product';
import Queryproduct from './Components/Queryproduct';
import {ReactQueryDevtools} from "react-query/devtools"
import Singleproduct from './Components/Singleproduct';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
      
        <Route path="/" element={<Homepage />} /> 
        <Route path="/product" element={<Product />} />
        <Route path="/queryproduct" element={<Queryproduct />} /> 
        <Route path="/singleproduct/:id" element={<Singleproduct />}/>
       
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </Router>
   
  );
}

export default App;
