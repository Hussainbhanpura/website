import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MI from "../assests/mi-150x150.jpg";
import Samsung from "../assests/samsung-150x150.jpg";
import Apple from "../assests/apple.jpeg";
import Motorola from "../assests/motorola-150x150.jpg";
import Techno from "../assests/techno_150x150.png";
import Oneplus from "../assests/oneplus_150x150.png";
import Oppo from "../assests/oppo-150x150.jpg";
import Vivo from "../assests/Vivo-Logo_150x150.jpg";
import "./BrandCarousel.css";

const BrandCarousel = () => {
  const sliderRef = useRef();
  const [settings] = useState({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Defines the maximum width for this setting
        settings: {
          slidesToShow: 1, // Changes to 2 slides for devices with width <= 768px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='container'>
      <h2 className='brand-carousel-title'>Popular Mobile Brands</h2>
      <hr className='hr-styled' />
      <div className='brand-carousel'>
        <Slider ref={sliderRef} {...settings}>
          <img src={MI} alt='mi' className='brand-image' />

          <img src={Samsung} alt='samsung' className='brand-image' />

          <img src={Apple} alt='apple' className='brand-image' />

          <img src={Motorola} alt='motorola' className='brand-image' />

          <img src={Techno} alt='techno' className='brand-image' />

          <img src={Oneplus} alt='oneplus' className='brand-image' />

          <img src={Oppo} alt='oppo' className='brand-image' />

          <img src={Vivo} alt='vivo' className='brand-image' />
        </Slider>
        <i class='fa fa-solid fa-chevron-left' onClick={goToPrev}></i>
        <i class='fa fa-solid fa-chevron-right' onClick={goToNext}></i>
      </div>
    </div>
  );
};

export default BrandCarousel;
