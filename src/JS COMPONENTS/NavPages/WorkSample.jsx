
import React from 'react';
import Slide from '../Homepage/Slides';
import Footer from '../Homepage/Footer';
import '../CSS style/WorkSample.css';

import Image1 from '/src/assets/slideimage/2024-05-19 at 21.33.08_abdefedf.jpg'
import Image2 from '/src/assets/slideimage/IMG-20240403-WA0009.jpg'
import Image3 from '/src/assets/slideimage/IMG-20240403-WA0010.jpg'
import Image4 from '/src/assets/slideimage/2024-05-19 at 21.33.04_dc1f61f4.jpg'
import Image5 from '/src/assets/slideimage/IMG-20240403-WA0021.jpg'

import Image6 from '/src/assets/geological-survey-service-500x500.webp';
import Image7 from '/src/assets/slideimage/IMG-20240403-WA0008.jpg';
import Image8 from '/src/assets/slideimage/2024-05-19 at 21.33.04_c6ccffec.jpg';
import Image9 from '/src/assets/gps-survey-service-.webp';
import Image10 from '/src/assets/total-station-survey-service-250x250.webp';

function WorkSample() {
  const Images1 = [Image1, Image2, Image3, Image4, Image5];
  const Images2 = [Image6, Image7, Image8, Image9, Image10];

  return (
    <main>
      <section>
        <div>
          <article>
            <div className='worksample_heading_div'>
              <p className='worksample_sub_heading' data-aos='fade-left'>--Our Work Sample --</p>
              <h1 className='worksample_heading' data-aos='fade-right'>--Projects We have worked on--</h1>
              <p className='worksample_para' data-aos='zoom-in'>The firm <b>REC</b> started to provide new project planning and implementation solutions to new entrepreneurs as well as existing Work Sample who wanted to go in for expansion or diversification. The firm now provides personnel selection and recruitment support services to business organizations.</p>
              <p className='worksample_para' data-aos='zoom-in-down'>We worked for our happy clients for establishing their business / industries and also organized events for Legal Awareness. If you want a discussion with us please request a call back now.</p>
              <p data-aos='zoom-in down'><b>We have worked on the following Projects:</b></p>
            </div>
          </article>
        </div>
        <div>
          <Slide direction="left" images={Images1}/>
          <Slide direction="right" images={Images2} />
        </div>
        <Footer />
      </section>
    </main>
  );
}

export default WorkSample;
