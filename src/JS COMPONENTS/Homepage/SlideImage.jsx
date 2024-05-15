import React, { useState,useEffect } from 'react';
import  '../CSS style/SlideImage.css';
import Image6 from '/src/assets/civile image.jpg'
import Image7 from '/src/assets/jcb.jpg'
import Image8 from '/src/assets/polution control image.jpeg'
import Image9 from '/src/assets/civile image.jpg'
import Image10 from '/src/assets/Consultancy On financial Matters & Accounting.webp'





function SlideImage() {
  const Images = [
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ];


 const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
   const intervalId = setInterval(goToNext, 2000); 

   return () => clearInterval(intervalId); 
   
 }, [currentIndex]); 



  return (
    <div>
     
     <div className="image_slideshow_div">
      {/* <button onClick={goToPrev}>Previous</button> */}
      <img className='slide_images' src={Images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {/* <button onClick={goToNext}>next</button> */}

    </div>

    </div>
  )
}

export default SlideImage;



