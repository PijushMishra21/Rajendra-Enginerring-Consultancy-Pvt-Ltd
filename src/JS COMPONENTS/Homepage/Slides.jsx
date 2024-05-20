

import React from 'react';
import PropTypes from 'prop-types';
import '../CSS style/Slides.css';

const Slide = ({ direction = "right", images }) => {
  return (
    <section>
      <div className={`marquee-container ${direction}`}>
        <div>
          <p className='marquee_heading'>--Some of our projects--</p>
        </div>
        <div className="marquee-content">
          {images && images.map((image, index) => (
            <img className='images' key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

Slide.propTypes = {
  direction: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slide;
