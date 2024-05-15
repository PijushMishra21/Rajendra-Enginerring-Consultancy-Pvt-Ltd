// import React from 'react'
import '../CSS style/Slides.css'
import Image1 from '/src/assets/slideimage/IMG-20240403-WA0008.jpg'
import Image2 from '/src/assets/slideimage/IMG-20240403-WA0009.jpg'
import Image3 from '/src/assets/slideimage/IMG-20240403-WA0010.jpg'
import Image4 from '/src/assets/slideimage/IMG-20240403-WA0021.jpg'
import Image5 from '/src/assets/slideimage/IMG-20240403-WA0026.jpg'


function Slide({direction ="right"} ) {
 const images =
  [
 Image1,
 Image2,
 Image3,
 Image4,
 Image5,

]


  return (
    <div>
     <section>
     
     <div className={`marquee-container ${direction}`}>
      <div>
        
        <p className='marquee_heading'>
            --Some of our projects--
        </p>
      </div>
      <div className="marquee-content">
        {images.map((image, index) => (
          <img className='images' key={index} src={image} alt={` ${index} Image`} />
        ))}
      </div>
    </div>
    </section>
    
    </div>
   
  )
}

export default Slide;

