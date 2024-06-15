import React from 'react';
import './Images.css'
import Image1 from './Assets/image1.png'
import Image2 from './Assets/image2.png'
import Image3 from './Assets/image3.png'
import Image4 from './Assets/image4.png'

function ImageGallery() {
  return (
    <div>
      <img src={Image1} alt=" " />
      <img src={Image2} alt=" " />
      <img src={Image3} alt=" " />
      <img src={Image4} alt=" " />
    </div>
  );
}

export default ImageGallery;
