import  { useState, useEffect } from 'react';
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header"
// import InfiniteScroll from './InfiniteScroll';
import '../CSS style/Header.css'
import '../CSS style/HomePage.css'
import {   } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'
// import SlideImage from "./SlideImage";
import Slide from "../Homepage/Slides";
import ServiceCard from "../Homepage/ServiceCard";
import ContactUs from '../NavPages/ContactUs'
import FAQ from '../Homepage/FAQ';
import { Link, NavLink, useNavigate,   } from 'react-router-dom';

/*images imported */
import businessImage from '/src/assets/1.png'
import faqImage from '/src/assets/medium-shot-engineer-architect-supervising-construction_23-2148233731.jpg'
import PlanmakingImage from '/src/assets/civil image.jpg'
import GeotagImage from '/src/assets/geo taging of land.jpg'
import projectImage from '/src/assets/civil photo 2.jpg'
import gpsImage from '/src/assets/gps-survey-service-.webp'
import landImage from '/src/assets/landsurveying-services-.webp'
import soilImage from '/src/assets/soil-land-survey-service-.webp'
import firmImage from '/src/assets/civile image.jpg'
import polutionImage from '/src/assets/polution control image.jpeg'
import accontingImage from '/src/assets/Consultancy On financial Matters & Accounting.webp'
/*images imported ended*/

import Image1 from '/src/assets/slideimage/2024-05-19 at 21.33.08_abdefedf.jpg'
import Image2 from '/src/assets/slideimage/IMG-20240403-WA0009.jpg'
import Image3 from '/src/assets/slideimage/IMG-20240403-WA0010.jpg'
import Image4 from '/src/assets/slideimage/2024-05-19 at 21.33.04_dc1f61f4.jpg'
import Image5 from '/src/assets/slideimage/IMG-20240403-WA0021.jpg'




function HomePage() {
  useEffect(()=>{
    Aos.init({duration:1500});
  },[])

 const para = (
  <>
    <p>
    <b>REC</b> is your premier partner in the development of comprehensive master plans for mass areas, combining expertise, innovation, and a commitment to sustainability. Our tailored approach ensures that every aspect of the plan, from spatial layout to infrastructure integration.
       </p>
  </>
);

  const para1 = (
    <>
      <p>
      In today's digital age, geotagging has emerged as a vital tool in enhancing spatial data accuracy, efficiency, and legal compliance. Rajendra Engineering Consultancy harnesses the power of geotagging technology to provide cutting-edge solutions for a wide range of applications.      
      </p>
    </>
  );

  const para2 = (
    <>
      <>
      Our project report encapsulates a thorough analysis  of key aspects essential for project success. It encompasses: Provides background information, objectives, and scope of the project.
 Outlines the approach, tools, and techniques employed for data collection, analysis, and implementation.   
 </>
    </>
  );

  const para3 = (
    <>
      <p>
      Rajendra Registration Services specializes in seamless firm and company registration. Our tailored consultancy ensures compliance and efficiency throughout the process. From documentation to final registration, we guide clients through legal requirements, expediting establishment. 
      </p>
    </>
  );
  const para4 = (
    <>
      <p>
      Rajendra Financial Consultancy offers specialized services to streamline financial accounting processes. With a focus on accuracy, compliance, and transparency, our team provides tailored solutions for businesses of all sizes. From bookkeeping to financial reporting and taxation,  
       </p>
    </>
  );
  const para5 = (
    <>
      <p>
      Rajendra Engineering Consultancy is dedicated to combating pollution with innovative, sustainable strategies. With expertise in environmental engineering, we offer tailored solutions for industries facing air, water, or soil pollution challenges.   
      </p>
    </>
  );
  


const paraData = (
  
  <>
    <p><b>Price:</b>₹10,000/km(approx)</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-3 months</p>
    <p><b>Type:</b> GPS</p>
    <p><b>GPS Accuracy:</b> 15-meter</p>
    <p><b>Minimum order quantity:</b> 1 km</p>
  </>
);

const paraData2 = (
  <>
    <p><b>Price:</b> ₹7500/Day(approx)</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-1 Days</p>
    <p><b>Type:</b> Land Survey</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </>
);

const paraData3 = (
  <>
    <p> <b>Price:</b>₹5,000/Day (approx)</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 5-7 Days</p>
    <p><b>Type:</b> Soil Testing</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </>
);

const Images1 =
[
Image1,Image2,Image3,  Image4, Image5,

]
 

  return (
    <div>
      <div>
     <Header  />
     </div>
<main className="main_page1">
 <section className="image_section">
 <div className="image_section_div">
   <img className="business_image" type='image/png' src={businessImage} alt="business-image" />
 </div>
</section> 
<section className="para_section">
 <aside>
 <div className="Servises_heading_div">
  <p className="Servises_sub_heading" data-aos='fade-right'> --Our Missions--</p>
  <h1 className="Servises_heading" data-aos='fade-left'>What We are Doing ?</h1>
 </div>
<article>
 <div className="srvise_list_div">
<article className='srvise_list_para_div'>
  <p className="srvise_list_para" data-aos='fade-up'>
    <b>With 23 years of experience </b>and a dedicated professional and support staff, <b>Rajendra Engineering Consultancy</b> has a broad range of market sectors that we provide our civil engineering services to in the Greater Philadelphia and New Jersey areas.At Rajendra Engineering Consultancy, we specialize in civil engineering and infrastructure projects, including urban planning and design. While our primary focus is on larger-scale projects, we can offer insights and expertise to help you maximize space utilization and create attractive living or working environments.

  </p>
  </article>
  <section className="service_card_section" >
  <ServiceCard 
      title="Master Plan Making & Plotting of Mass Areas"
      imageUrl={PlanmakingImage}
      para={para}
    />
<ServiceCard 
      title="Geo Tagging of Land"
      imageUrl={GeotagImage}
      para={para1}
    />
<ServiceCard
      title="Project Report  For New Project"
      imageUrl={projectImage}
      para={para2}
    />
    <ServiceCard
      title="Firm/Company  Registration"
      imageUrl= {firmImage}
      para={para3}
    />
    <ServiceCard
      title="Consultancy On Pollution Control "
      imageUrl={polutionImage}
      para={para4}
    />
    <ServiceCard
      title="Consultancy On Financial  Accounting"
      imageUrl={accontingImage}
      para={para5}
    />

    <ServiceCard
      title="Gps Survey Services"
      imageUrl={gpsImage}
      para={paraData}
    />
    <ServiceCard
      title="Land Survey Survices"
      imageUrl={landImage}
      para={paraData2}
    />
    <ServiceCard
      title="Soil Investigation"
      imageUrl={soilImage}
      para={paraData3}
    />
<div>
  <Link to="/Services">
  <button className="view_servises_btn" data-aos='zoom-in' >View all Servises</button>

</Link>
</div>
  </section>
  
  <section className='work_sample_section'>
  <div className="work_sample_heading_div">
  <p className="work_sample_sub_heading" data-aos='fade-left'> --Our Work Sample--</p>
  <h2 className="work_sample_heading" data-aos='fade-right' >Project Overview</h2>
 </div>
 <article>
 <p className="work_sample_para" data-aos='zoom-in'>The business plan is the foundation of your investor package. However, most entrepreneurs are too busy with other priorities – such as developing products, finding customers, and recruiting a team – to prepare a compelling business plan. <b>Since 2000</b>, we helped many <b>HUF</b> or <b>Industries Comprehensive Solutions</b> for Industrial and Municipal Development At <b>Rajendra Engineering Consultancy</b>, we offer a diverse range of services tailored to meet the needs of industrial and municipal projects.Our expertise encompasses.
 <b>Industrial or Municipal Planning:</b> Strategic planning services to optimize land usage and infrastructure development for industrial and municipal projects.
 <b>Drone Survey and GIS Imagery:</b> Cutting-edge aerial surveying and mapping solutions using drone technology and <b> Geographic Information Systems (GIS)</b> for accurate data collection and analysis.
  </p>
 </article>
  {/* <ServiceCard /> */}
  <Slide direction="left" images={Images1} />

  </section>
 </div>
 </article>
</aside>
</section>
</main>


 <section className='faq-section'>
 <div className='faq_image_section'>
  <div data-aos='fade-right'>
  <img className='faq_side_image'  src={faqImage} alt="faq_side_image" />
  
</div>

<div data-aos='fade-left'>
<FAQ  />

</div>
 </div>

 </section>
 <Footer />
    </div>
  )
}

export default HomePage;