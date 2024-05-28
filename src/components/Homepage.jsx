import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import BrandCarousel from "./BrandCarousel";
import BrandCarousel2 from "./BrandCarousel2";
import ProductCarousel from "./ProductCarousel";
import Categories from "./Categories";
import Service from "./Service";
import Section1 from "./Section1";
import WhatsappIcon from "./WhatsappIcon";
import Map from "./Map";

const Homepage = () => {
  return (
    <div>
      <WhatsappIcon />
      <Carousel />
      <Section1 />
      <BrandCarousel />
      <ProductCarousel />
      <BrandCarousel2 />
      <Categories />
      <ProductCarousel />
      <Service />
      <Map />
    </div>
  );
};

export default Homepage;
