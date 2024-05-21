import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import About from "../assests/About.jpeg";
import ShoppingCart from "../assests/icons/shopping-cart.png";
import Wholesale from "../assests/icons/wholesale.png";
import "./Section1.css";

const Section1 = () => {
  return (
    <Container className='about-us-section'>
      <Row className='align-items-center'>
        <Col md={6} className='d-flex justify-content-center'>
          <div className='about-image-container'>
            <Image src={About} alt='Team' className='about-us-image' rounded />
          </div>
        </Col>
        <Col md={6}>
          <div className='about-us-content'>
            <h6 className='about-us-head'>
              EXPERIENCE TECHNOLOGY AT ITS FINEST
            </h6>
            <h2 className='about-us-title'>Who We Are, What We Do</h2>
            <p className='about-us-text'>
              We do Global Wholesale & bulk trading of Mobile & Smartphones of
              top brands like Apple, Samsung, Xiaomi etc. We also cover the UAE
              market through van sales distribution of mobile accessories from
              brands like JBL, SONY, and MICCELL.
            </p>
            <Row>
              <Col md={6}>
                <Image
                  src={ShoppingCart}
                  alt='E-Commerce'
                  className='about-us-icon'
                />

                <h4 className='about-us-subtitle'>E-COMMERCE</h4>
                <p className='about-us-text'>
                  iTrade Bharat has its footprint across UAE, Africa, and
                  European E-commerce Platforms like Amazon, Noon, Jumia, and
                  Yandex where we sell smartphones and accessories of all top
                  brands.
                </p>
              </Col>
              <Col md={6}>
                <Image
                  src={Wholesale}
                  alt='Wholesale'
                  className='about-us-icon'
                />
                <h4 className='about-us-subtitle'>WHOLESALE EXIM</h4>
                <p className='about-us-text'>
                  B2B, Wholesale & bulk trading of Mobile & Smartphones,
                  accessories, and related products. We are into wholesale
                  imports and exports of leading brands like Apple including
                  iPhones, Airpads, Airpods, and Macbooks along with Samsung
                  Smartphones, Tablets, and other trending products like
                  Playstations, TWS, Headphones, chargers, and cables by leading
                  brands.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
