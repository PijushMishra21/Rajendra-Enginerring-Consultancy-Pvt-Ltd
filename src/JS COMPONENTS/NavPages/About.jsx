import React from 'react'
import '../CSS style/About.css'
import Footer from '../Homepage/Footer'
import Slide from '../Homepage/Slides';
import aboutImage from '/src/assets/civil engenear happy.jpg'


import Image1 from '/src/assets/slideimage/2024-05-19 at 21.33.08_abdefedf.jpg'
import Image2 from '/src/assets/slideimage/IMG-20240403-WA0009.jpg'
import Image3 from '/src/assets/slideimage/IMG-20240403-WA0010.jpg'
import Image4 from '/src/assets/slideimage/2024-05-19 at 21.33.04_dc1f61f4.jpg'
import Image5 from '/src/assets/slideimage/IMG-20240403-WA0021.jpg'





function About() {
  const Images1 =
  [
  Image1,Image2,Image3,  Image4, Image5,
  
  ]

  return (
 <main>
    <section className='about-sections'>
      <div className='about_us_div'>
<div className='about_heading_div'>
 <p className='About_us_sub_heading'>--We are Building
</p>
 <h1 className='about_heading'>
 A Great Dream For You !!!
 </h1>
 <p className='about_sub_para'>The firm REC Pvt Ltd stared to provide new project planning and implementation solutions both legal and engineering to new comers as well as existing players units who wanted to go in for expansion, modification, aquigition or diversification. The firm now provides personnel selection and recruitment support services to business organization.</p>
</div>
<aside className='about-image-aside'>
 <div>
  <img className='about_image' src={aboutImage} alt="about us image" />
 </div>
</aside>
 </div>
 </section>
  <section className='About_main_section'>
       <div className=''>
       <p className='About_us_sub_heading' data-aos='fade-right'>--What About Us--</p>
        </div> 
        <div className='About_us_heading_div'>
        <h2 className='About_us_heading' data-aos='fade-left'>Who We Are ?</h2>
        </div>
        <article>
          <div>
            <p className='About_us_para' data-aos='zoom-in'>
            <b>Rajendra Engineering Consultancy Pvt Ltd</b> is a legal Management and <b>Engineering Consultancy Organization </b>set up in the year <b>2000</b> at <b>Midnapore</b>, the district headquarter town of <b> West Midnapore District</b>. The founderS of the firm educationally and technically experienced from Kolkata, West Bengal had vast experience in Industry and as a legal Consultant. The firm Recruitment stared to provide new project planning and implementation solutions to new comers as well as existing players units who wanted to go in for expansion or diversification. The firm now provides Legal Awarness services to business organization. The Firm prepared thousand of project reports for micro and small units <b>(MSMEs)</b> 
            </p>
            <p className='About_us_para' data-aos='fade-in'>
            At <b>Rajendra Engineering Consultancy</b>, we are committed to delivering exceptional quality, innovation, and reliability in every project we undertake. <b> Contact us</b> today to learn more about how we can support your industrial and municipal development needs.
            </p>
          </div>
        </article>
  </section>
  <Slide direction="left" images={Images1} />

        <Footer />
  </main>
  )
}

export default About