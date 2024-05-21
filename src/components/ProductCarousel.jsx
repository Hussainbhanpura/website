import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dyson from "../assests/trending_products/Dyson supersonic.png";
import galaxyFold from "../assests/trending_products/Galaxy Fold.png";
import galaxyWatch6 from "../assests/trending_products/Galaxy Watch 6.png";
import galaxyZFlip from "../assests/trending_products/Galaxy Z Flip.png";
import iphone14Plus from "../assests/trending_products/iphone 14 Plus.png";
import iphone14ProMax from "../assests/trending_products/iphone 14 pro Max.png";
import iphone14 from "../assests/trending_products/iphone 14.png";
import iphoneSE from "../assests/trending_products/Iphone SE.png";

import "./ProductCarousel.css";

const BrandCarousel = () => {
  const sliderRef = useRef();
  const [settings] = useState({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Defines the maximum width for this setting
        settings: {
          slidesToShow: 2, // Changes to 2 slides for devices with width <= 768px
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
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
    <div className='container2'>
      <p>Trending Prouducts</p>
      <div className='brand-carousel2'>
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src={dyson} alt='dyson' className='brand-image2' />
            <p>Dyson Supersonic hair dryer</p>
          </div>

          <div>
            <img src={galaxyFold} alt='galaxyFold' className='brand-image2' />
            <p>Galaxy Z Fold 5</p>
          </div>

          <div>
            <img src={galaxyZFlip} alt='galaxyZFlip' className='brand-image2' />
            <p>Galaxy Z Flip 5</p>
          </div>

          <div>
            <img
              src={galaxyWatch6}
              alt='galaxyWatch6'
              className='brand-image2'
            />
            <p>Galaxy Watch 6 | Watch 6</p>
          </div>

          <div>
            <img src={iphoneSE} alt='iphoneSE' className='brand-image2' />
            <p>Apple Iphone SE</p>
          </div>

          <div>
            <img src={iphone14} alt='iphone14' className='brand-image2' />
            <p>Apple Iphone 14</p>
          </div>

          <div>
            <img
              src={iphone14Plus}
              alt='iphone14Plus'
              className='brand-image2'
            />
            <p>Apple Iphone 14 Plus</p>
          </div>

          <div>
            <img
              src={iphone14ProMax}
              alt='iphone14ProMax'
              className='brand-image2'
            />
            <p>Apple Iphone 14 Pro Max</p>
          </div>
        </Slider>
        <i class='fa fa-solid fa-arrow-left-long' onClick={goToPrev}></i>
        <i class='fa fa-solid fa-arrow-right-long' onClick={goToNext}></i>
      </div>
    </div>
  );
};

export default BrandCarousel;
