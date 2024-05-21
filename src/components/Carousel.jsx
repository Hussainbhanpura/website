import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";
import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex(index === 3 ? 0 : index + 1),
    onSwipedRight: () => setIndex(index === 0 ? 3 : index - 1),
  });

  const slides = [
    {
      src: require("../assests/iphone15-slide5.jpg"),
      title: "MOBILE PHONES",
      description: "You Desire",
    },
    {
      src: require("../assests/slide17.jpg"),
      title: "COME, PARTNER WITH US",
      description: "Earn benefits and help us revolutionize the supply chain",
    },
    {
      src: require("../assests/slide14.jpg"),
      title: "STORAGE SOLUTIONS",
      description: (
        <>
          Your Trusted <br /> Warehouse Facility
        </>
      ),
    },
    {
      src: require("../assests/slide16.jpg"),
      title: "GLOBAL PRESENCE",
      description: "In Mobility Sector",
    },
  ];

  return (
    <div
      {...handlers}
      id='carouselExampleControls'
      className='carousel slide'
      data-bs-ride='carousel'
      style={{ height: "60vh", position: "relative" }}
    >
      <div className='carousel-inner'>
        {slides.map((slide, idx) => (
          <div
            className={`carousel-item ${index === idx ? "active" : ""}`}
            key={idx}
          >
            <div className={`text-content ${idx === 1 ? "small" : ""}`}>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
            <img
              src={slide.src}
              className='d-block w-100'
              alt={`Slide ${idx + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Left and right controls/arrows */}
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='prev'
        onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='next'
        onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
      </button>
      {/* Custom Indicators */}
      <div className='carousel-indicators-custom'>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={idx === index ? "dot active" : "dot"}
            onClick={() => setIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
