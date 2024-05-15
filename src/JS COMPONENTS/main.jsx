// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



import React , {  } from "react";
import ReactDOM from 'react-dom/client'
import HomePage from '../JS COMPONENTS/Homepage/HomePage'
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import ContactUs from '../JS COMPONENTS/NavPages/ContactUs';
import Header from '../JS COMPONENTS/Homepage/Header';
import '../JS COMPONENTS/CSS style/Header.css';
import About from '../JS COMPONENTS/NavPages/About';
import Services from '../JS COMPONENTS/NavPages/Services';
import WorkSample from '../JS COMPONENTS/NavPages/WorkSample';
import ScrollToTop from "../JS COMPONENTS/Homepage/ScrollToTop";
// import { react } from '@vitejs/plugin-react';



  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <ScrollToTop  />
     <Header  />
   <Routes>

          <Route path='/' element={<HomePage />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/WorkSample" element={<WorkSample />} />
          <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>

  </BrowserRouter>

  </React.StrictMode>,
)
