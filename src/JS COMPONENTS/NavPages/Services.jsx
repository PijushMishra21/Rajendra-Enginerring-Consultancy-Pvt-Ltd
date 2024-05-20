import React from 'react'
import ServiceCard from '../Homepage/ServiceCard'
import '../CSS style/Services.css'
import Footer from '../Homepage/Footer'
import Slide from '../Homepage/Slides';
import SlideImage from '../Homepage/SlideImage';

/*images import strted */
import PlanmakingImage from '/src/assets/civil image.jpg'
import GeotagImage from '/src/assets/geo taging of land.jpg'
import projectImage from '/src/assets/civil photo 2.jpg'
import gpsImage from '/src/assets/gps-survey-service-.webp'
import landImage from '/src/assets/landsurveying-services-.webp'
import soilImage from '/src/assets/soil-land-survey-service-.webp'
import firmImage from '/src/assets/civile image.jpg'
import polutionImage from '/src/assets/polution control image.jpeg'
import accontingImage from '/src/assets/Consultancy On financial Matters & Accounting.webp'
import OrganisatioImage from '/src/assets/gis-survey-service-1000x1000.webp'
import layoutImage from '/src/assets/land and-survey-service-.webp'
import stationImage from '/src/assets/total-station-survey-service-250x250.webp'
import dgpsImage from '/src/assets/gis-survey-service-1000x1000.webp'
import gisImage from '/src/assets/gis-survey-service-1000x1000.webp'
import geologiImage from '/src/assets/geological-survey-service-500x500.webp'
import laserImage from '/src/assets/machine-alignment-services-.webp'
import topoImage from '/src/assets/topographical-route-land-survey-service-500x500.jpeg'
/*images import ended*/

import Image1 from '/src/assets/slideimage/IMG-20240403-WA0008.jpg'
import Image2 from '/src/assets/slideimage/IMG-20240403-WA0009.jpg'
import Image3 from '/src/assets/slideimage/IMG-20240403-WA0010.jpg'
import Image4 from '/src/assets/slideimage/IMG-20240403-WA0021.jpg'
import Image5 from '/src/assets/slideimage/IMG-20240403-WA0026.jpg'




    

function Services() {
  const Images1 =
  [
  Image1,Image2,Image3,  Image4, Image5,
  
  ]

  return (
   <>
      <main>
<section className='SlideImage-section'>
      <div className='SlideImage'> 
   <SlideImage  />
</div>
</section>
<section className='service-main-section'>
 <div className='service_heading_div'>
  <p className='service_sub_heading' data-aos='fade-right'>--Our Engineering Services-- </p>
  <h1 className='service_heading' data-aos='fade-left'>What Services We are Provide ?</h1>
  <p className='service_para' data-aos='zoom-in-up'>With 23 years of experience and a dedicated professional and support staff, <b>Rajendra Engineering Consultancy</b> has a broad range of market sectors that we provide our civil engineering services to in the Greater Philadelphia and New Jersey areas.At Rajendra Engineering Consultancy, we specialize in civil engineering and infrastructure projects, including urban planning and design. While our primary focus is on larger-scale projects, we can offer insights and expertise to help you maximize space utilization and create attractive living or working environments.
  </p>
  <p className='service_para' data-aos='zoom-in-down'>
  <b>Topographical Survey and Land Use Mapping:</b>Precise topographical surveys and land use mapping to facilitate informed decision-making and regulatory compliance.
<b>Litigation Land Demarcation and Partition Commission:</b> Expert assistance in resolving land disputes through precise demarcation and partition commission services.
<b>Preparation of Town Plans or City Plans:</b> Development of comprehensive town plans and city plans to guide sustainable urban development.
<b>Infrastructure Planning:</b> Design and planning services for sewerage, drainage, and water pipe networks to ensure efficient and reliable infrastructure systems..
  </p>
  <p data-aos='zoom-in-down'><b>We offer engineering services in the following areas:</b></p>
  </div>
  
 <div className='sercice_card'>
 <ServiceCard 
  title="Master Plan Making & Plotting of a Mass Areas" 
  imageUrl={PlanmakingImage}
  para={<><p>
      A civil project plan is a comprehensive document that outlines the scope, objectives, timeline, resources, and methodologies for executing  project. It serves as a roadmap for all stakeholders involved in the project, including engineers, architects, contractors, and clients.
  </p>
 </>
  }
  />
  <ServiceCard
   title="Geo Tagging of Land" 
   imageUrl={GeotagImage}
   para={<>
   <p>
   Geo-tagging of land involves assigning geographic coordinates to parcels of land, enabling precise location identification and spatial data management. Through the integration of Geographic Information System (GIS), cadastral mapping, and Global Navigation Satellite Systems (GNSS).</p>
</>}
   />
  <ServiceCard
   title="Consultancy On Pollution Control"
   imageUrl={polutionImage}
   para={<>
    <p>
    Rajendra Engineering Consultancy is dedicated to combating pollution with innovative, sustainable strategies. With expertise in environmental engineering, we offer tailored solutions for industries facing air, water, or soil pollution challenges.   </p>
 </>}

   />
<ServiceCard
      title="Consultancy On Financial  Accounting"
      imageUrl={accontingImage}
      para={
        <>
    <p>
    Rajendra Financial Consultancy offers specialized services to streamline financial accounting processes. With a focus on accuracy, compliance, and transparency, our team provides tailored solutions for businesses of all sizes. From bookkeeping to financial reporting and taxation,   </p>
 </>
   }
    />


  </div>
  <div className='sercice_card'>
 
  <ServiceCard
   title="Firm/Company Registration"
   imageUrl={firmImage}
   para={<>
    <p>
    Rajendra Registration Services specializes in seamless firm and company registration. Our tailored consultancy ensures compliance and efficiency throughout the process. From documentation to final registration, we guide clients through legal requirements, expediting establishment. </p>
 </>}
   />

<ServiceCard  
      title="Project Report  For New Project"
      imageUrl={projectImage} 
   para={<>
    <p>
    Our project report for the new venture is a concise roadmap for success. It details objectives, methodologies, and feasibility, guiding execution. Marketing  by highlighting demand, competition, and risks. Financial projections  ensure resource optimization and investor confidence. </p>
 </>}
   />
<ServiceCard 
  title="Consultancy On Quality Certification (ISI/ISO)  "
  imageUrl={accontingImage}
  para={<><p>
Our consultancy specializes in guiding businesses through obtaining quality certifications like ISI and ISO. We prioritize adherence to international standards to enhance product quality, efficiency, and market competitiveness.Our experts provide comprehensive assistance. </p>
 </>
  }
  />

<ServiceCard 
  title="3D Modelling Service: Bringing Ideas to Life "
  imageUrl={OrganisatioImage}
  para={<><p>
Our 3D modelling service transforms concepts into detailed, lifelike representations. Using cutting-edge software, we create accurate visuals for architectural designs, product prototypes, and more. Collaborating closely with clients, we ensure every detail meets their vision.   </p>
 </>
  }
  />
   
    </div> 
 <div className='service_heading_div'>
 <h2 className='survey_heading' data-aos='fade-in'>--Our Survey Services--</h2>
 </div>
 <div className='sercice_card'>
<ServiceCard
      title="Gps Survey Services"
      imageUrl={gpsImage}
      para= {<>
      <p><b>Price:</b>  ₹10,000/km</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 km</p>
    </>}
    />

<ServiceCard
       title="Layout-and-Lineout-Survey-Service"
       imageUrl={layoutImage}
      para= {<>
      <p><b>Price:</b> ₹7000/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> Layout And Lineout</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
    
<ServiceCard
       title="Soil Investigation  and Testing" 
       imageUrl={soilImage}
      para= {<>
      <p><b>Price:</b> ₹5,000</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b>2-7 Days</p>
      <p><b>Type:</b> Soil</p>
      <p><b>GPS Accuracy:</b>0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
    
<ServiceCard
      title="Total Station Survey Service"
      imageUrl={stationImage}
      para= {<>
      <p><b>Price:</b> ₹7500/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-1 Days</p>
      <p><b>Type:</b> Station Survey</p>
      <p><b>GPS Accuracy:</b> 0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />


 </div>

 <div className='sercice_card'>
<ServiceCard
      title="DGPS-Survey-Service"
      imageUrl={dgpsImage}
      para= {<>
      <p><b>Price:</b> 10,000/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 1-3 Days</p>
      <p><b>Type:</b> DGPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
<ServiceCard
      title="Land Survey Consultancy Service"
      imageUrl={landImage}
      para= {<>
      <p><b>Price:</b>₹7,500/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> Land</p>
      <p><b>GPS Accuracy:</b> 10 meter</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
<ServiceCard
      title="Land and-Survey-Service"
      imageUrl={layoutImage}
      para= {<>
      <p><b>Price:</b> 10,000</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 1 km</p>
    </>}
    />

  <ServiceCard
      title="Topographical Land Survey "
      imageUrl={topoImage}
      para= {<>
      <p><b>Price:</b> ₹300/acre</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GPS</p>
      <p><b>GPS Accuracy:</b> 15-meter</p>
      <p><b>Minimum order quantity:</b> 5 acre</p>
    </>}
    />



 </div>
 <div className='sercice_card'>
  <ServiceCard
      title="Geological Survey Service"
      imageUrl={geologiImage}
      // para={paraData}
      para= {<>
      <p><b>Price:</b>  ₹5,200/Day </p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> Geological</p>
      <p><b>GPS Accuracy:</b>0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />

<ServiceCard
      title="Land Survey Survices"
      imageUrl={landImage}
      para={
        <>
        <p><b>Price:</b> ₹7500/Day</p>
    <p><b>Service Location:</b> India</p>
    <p><b>Service Duration:</b> 0-1 Days</p>
    <p><b>Type:</b> Land Survey</p>
    <p><b>Minimum order quantity:</b> 1 Day</p>
  </> }
 />
<ServiceCard
     title="Laser Alignment"
     imageUrl={laserImage}
      para= {<>
      <p><b>Price:</b>₹8,500/Day</p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> machine alignment</p>
      <p><b>GPS Accuracy:</b> 0</p>
      <p><b>Minimum order quantity:</b> 1 Day</p>
    </>}
    />
<ServiceCard
      title="GIS Survey Service"
      imageUrl={gisImage}
      para= {<>
      <p><b>Price:</b> ₹450 /acre </p>
      <p><b>Service Location:</b> India</p>
      <p><b>Service Duration:</b> 0-3 months</p>
      <p><b>Type:</b> GIS</p>
      <p><b>GPS Accuracy:</b> 0</p>
      <p><b>Minimum order quantity:</b> 5 acre</p>
    </>}
    />


</div> 





 <Slide direction="left" images={Images1}/>
 <Footer />
</section>
 </main>
  </>)
}

export default Services