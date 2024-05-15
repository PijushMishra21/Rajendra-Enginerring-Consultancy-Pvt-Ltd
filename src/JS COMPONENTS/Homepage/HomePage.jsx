import  { useState, useEffect } from 'react';
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header"
// import InfiniteScroll from './InfiniteScroll';
import '../CSS style/Header.css'
import '../CSS style/HomePage.css'
import {   } from "react-icons/fa";
// import SlideImage from "./SlideImage";
import Slide from "../Homepage/Slides";
import ServiceCard from "../Homepage/ServiceCard";
import ContactUs from '../NavPages/ContactUs'
import FAQ from '../Homepage/FAQ';
import { Link, NavLink, useNavigate,   } from 'react-router-dom';
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











const paraData = (
  <>
    <p><b>Price:</b>₹10,000/km</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-3 months</p>
    <p><b>Type:</b> GPS</p>
    <p><b>GPS Accuracy:</b> 15-meter</p>
    <p><b>Minimum order quantity:</b> 1 km</p>
  </>
);

const paraData2 = (
  <>
    <p><b>Price:</b> ₹7500/Day</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-1 Days</p>
    <p><b>Type:</b> Land Survey</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </>
);

const paraData3 = (
  <>
    <p> <b>Price:</b>₹5,000/Day</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 5-7 Days</p>
    <p><b>Type:</b> Soil Testing</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </>
);

function HomePage() {

 const para = (
  <>
    <p>
    <b>Rajendra Engineering Consultancy</b> is your premier partner in the development of comprehensive master plans for mass areas, combining expertise, innovation, and a commitment to sustainability. Our tailored approach ensures that every aspect of the plan, from spatial layout to infrastructure integration.
       </p>
  </>
);

  const para1 = (
    <>
      <p>
      In today's digital age, geotagging has emerged as a vital tool in enhancing spatial data accuracy, efficiency, and legal compliance. Rajendra Engineering Consultancy harnesses the power of geotagging technology to provide cutting-edge solutions for a wide range of applications.      </p>
    </>
  );

  const para2 = (
    <>
      <p>
      Our project report encapsulates a thorough analysis  of key aspects essential for project success. It encompasses: Provides background information, objectives, and scope of the project.
 Outlines the approach, tools, and techniques employed for data collection, analysis, and implementation.   </p>
    </>
  );

  const para3 = (
    <>
      <p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients. .      </p>
    </>
  );

  const images = [
   '/src/assets/slideimage/IMG-20240403-WA0008.jpg',
  '/src/assets/slideimage/IMG-20240403-WA0009.jpg',
  '/src/assets/slideimage/IMG-20240403-WA0010.jpg',
  '/src/assets/slideimage/IMG-20240403-WA0021.jpg',
  '/src/assets/slideimage/IMG-20240403-WA0026.jpg',
 ]
 
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
 const [visible, setVisible] = useState(true);

 useEffect(() => {
   const handleScroll = () => {
     const currentScrollPos = window.scrollY;

     setVisible(prevScrollPos > currentScrollPos);
     setPrevScrollPos(currentScrollPos);
   };

   window.addEventListener('scroll', handleScroll);

   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, [prevScrollPos]);

  return (
    <div>
     <Header className={`top_bar ${visible ? 'visible' : 'hidden'}`} />
     
<main className="main_page1">
 <section className="image_section">
 <div className="image_section_div">
   <img className="business_image" type='image/png' src={businessImage} alt="business-image" />
 </div>
</section> 
<section className="para_section">
 <aside>
 <div className="Servises_heading_div">
  <p className="Servises_sub_heading" > --Our Servises--</p>
  <h1 className="Servises_heading">What We are Doing ?</h1>
 </div>
<article>
 <div className="srvise_list_div">
  <p className="srvise_list_para"><b>Topographical Survey and Land Use Mapping:</b>Precise topographical surveys and land use mapping to facilitate informed decision-making and regulatory compliance.

<b>Litigation Land Demarcation and Partition Commission:</b> Expert assistance in resolving land disputes through precise demarcation and partition commission services.

<b>Preparation of Town Plans or City Plans:</b> Development of comprehensive town plans and city plans to guide sustainable urban development.

<b>Infrastructure Planning:</b> Design and planning services for sewerage, drainage, and water pipe networks to ensure efficient and reliable infrastructure systems..
  </p>
  <section className="service_card_section">
  <ServiceCard
      title="Master Plan making & plotting of a mass areas"
      imageUrl={PlanmakingImage}
      para={para}
    />
<ServiceCard
      title="Geo tagging of land"
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
      para={para2}
    />
    <ServiceCard
      title="Consultancy On Pollution Control "
      imageUrl={polutionImage}
      para={para2}
    />
    <ServiceCard
      title="Consultancy On financial  Accounting"
      imageUrl={accontingImage}
      para={para2}
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
  <button className="view_servises_btn" >View all Servises</button>

</Link>
</div>
  </section>
  
  <section className='work_sample_section'>
  <div className="work_sample_heading_div">
  <p className="work_sample_sub_heading"> --Our Work Sample--</p>
  <h1 className="work_sample_heading">Project Overview</h1>
 </div>
 <article>
 <p className="work_sample_para">The business plan is the foundation of your investor package. However, most entrepreneurs are too busy with other priorities – such as developing products, finding customers, and recruiting a team – to prepare a compelling business plan. <b>Since 2000</b>, we helped many <b>HUF</b> or <b>Industries Comprehensive Solutions</b> for Industrial and Municipal Development At <b>Rajendra Engineering Consultancy</b>, we offer a diverse range of services tailored to meet the needs of industrial and municipal projects.Our expertise encompasses.
 <b>Industrial or Municipal Planning:</b> Strategic planning services to optimize land usage and infrastructure development for industrial and municipal projects.
 <b>Drone Survey and GIS Imagery:</b> Cutting-edge aerial surveying and mapping solutions using drone technology and <b> Geographic Information Systems (GIS)</b> for accurate data collection and analysis.
  </p>
 </article>
  {/* <ServiceCard /> */}
  <Slide images={images}/>

  </section>
 </div>
 </article>
</aside>
</section>
</main>


 <section>
 <div className='faq_image_section'>
  <div>
  <img className='faq_side_image'  src={faqImage} alt="faq_side_image" />
  
</div>


 <FAQ />
 </div>

 </section>
 <Footer />
    </div>
  )
}

export default HomePage;