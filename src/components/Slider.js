import React from 'react';
import KIWI1 from '../assets/images/KIWI-1.png';
import KIWI2 from '../assets/images/KIWI-2.png';
import KIWI3 from '../assets/images/KIWI-3.png';
import KIWI4 from '../assets/images/KIWI-4.png';
import KIWI5 from '../assets/images/KIWI-5.png';
import KIWI6 from '../assets/images/KIWI-6.png';
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const slideImages = [
  KIWI1,
  KIWI2,
  KIWI3,
  KIWI4,
  KIWI5,
  KIWI6
];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  arrows: false,
  autoplay: true
};

const Slideshow = () => {
  return (
    <div>
      <Fade
        {...properties}
      >
        {
          slideImages.map((image) => (
            <>
              <div className="each-slide">
                <img 
                  width="100%"
                  height="auto"
                  alt=""
                  src={image}
                />
                {/* <div style={{ 'backgroundImage': `url(${image})` }}>
                </div> */}
              </div>
            </>
          ))
        }
      </Fade>
    </div>
  )
};

export default Slideshow;