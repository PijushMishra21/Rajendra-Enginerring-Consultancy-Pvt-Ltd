import React, { useState } from 'react';
import '../CSS style/ContactUs.css'; 
import {} from '@formspree/react';
import Footer from '../Homepage/Footer';
// import GoogleMapApi from './GoogleMapApi';
import { FaPhoneAlt,FaPeriscope,FaEnvelope   } from "react-icons/fa";
import Slide from '../Homepage/Slides';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    number:'',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
       console.log(e)
    try {
      const response = await fetch('https://formspree.io/f/mleqookp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        console.log('Message sent successfully!');
        setFormData({
          name: '',
          number: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <main>
    <div data-aos='fade'>
      <div className='contact-container'>
    <div className="contact-form-container" data-aos='fade'>
      <p className='contact_us_sub_heading'>--Want to contact with us--</p>
      <h1 className='contact_us_heading'>Request Call back__</h1>
      <form onSubmit={handleSubmit} id='contact_form'>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Your Mobile Number:</label>
          <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" data-aos='fade'>Submit</button>
      </form>
    </div>
    <aside className='adress_section' data-aos='fade'>
      <h2 className='contact_us_heading'>Contact Us :</h2>
      <address className='address'>
      
        <p>
        <FaPhoneAlt className='icon'/> 
        
          <b>Mobile Number :</b> (+91) 8535912770 / (+91) 9932731756</p>
        <p>
        <FaEnvelope className='icon'/>
          <b>Email : </b>rajendraenggconsultancysales@gmail.com
          </p>
         
        <p> <FaPeriscope className='icon'/>
          <b>Office Address : </b>
          </p>
      <p>Mirzabazar, Medinipur, West Bengal - 721101 </p>
      {/* <GoogleMapApi /> */}
      <div className='gmap-div'>
      <iframe className='gmap-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29507.607960936646!2d87.28068241083984!3d22.412045000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5bb5fce7a7a9%3A0x476bfef8da541819!2sMirzabazar%20Vegetables%20Market!5e0!3m2!1sen!2sin!4v1715944039856!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-label='google map'>
      </iframe>
      </div>
      </address>
    </aside>


    </div>
    <Slide />
    <Footer />
    </div>
    </main>
  );
}
export default ContactForm;