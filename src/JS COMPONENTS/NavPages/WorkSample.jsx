import React from 'react'
import Slide from '../Homepage/Slides'
import Footer from '../Homepage/Footer'
import '../CSS style/WorkSample.css';

function WorkSample() {
  



  return (
    <div>
    <section>
      <div>
        <article>
      <div className='worksample_heading_div'>
       <p className='worksample_sub_heading' data-aos='fade-left'>--Our Work Sample --</p>
        <h1 className='worksample_heading' data-aos='fade-right'>--Projects We have worked on--</h1>
        <p className='worksample_para' data-aos='zoom-in'>The firm <b>REC</b> stared to provide new project planning and implementation solutions to new entrepreneurs as well as existing Work Sample who wanted to go in for expansion or diversification. The firm now provides personnel selection and recruitment support services to business organization.</p>
        <p className='worksample_para' data-aos='zoom-in-down'>We worked for our happy clients for establishing their business / industries and also organised events for Legal Awarness. If you want a discussion with us please request a call back now.</p>
         <p data-aos='zoom-in down'><b>We have worked on the following Projects:</b></p>
      </div>
      </article>
      </div>
      <div>
        <Slide direction="left" />
        <Slide direction="right" />
      </div>
      <Footer />
    </section>
    </div>
  )
}

export default WorkSample;