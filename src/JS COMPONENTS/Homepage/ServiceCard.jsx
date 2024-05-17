import React from 'react';
import '../CSS style/ServiceCard.css'
import { Link, } from 'react-router-dom';
import ContactUs from '../NavPages/ContactUs'





function ServiceCard({title,imageUrl,para,price,duration,type,accuracy,quantity}) {




  return (
    <div data-aos='zoom-in'>
      
      <div className="service_card">
  <div className="service_card_image_div">
    <img className="service_card_image" src={imageUrl} alt="Project Image" />
 
  </div>
  <div className="service_card_title" data-aos='fade'>
    
       <h5>{title}</h5>
    
    </div>
  <div className="service_card_description" data-aos='fade'>

      <p className='para'>{para}</p>
  </div>
  <Link to='/ContactUs'>
  <button className='Quote_btn' data-aos='fade'>
    Get Quote
  </button>
  </Link>
  </div>

    </div>
  )
}

export default ServiceCard