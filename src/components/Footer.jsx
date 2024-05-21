import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import iphone from "../assests/iphone.png";

const Footer = () => {
  return (
    <div className='footer'>
      <Row>
        <Col md={3}>
          <img src={iphone} alt='Logo' />
          <p>
            We are one of the leading Mobile devices, Mobile Accessories and
            Electronics distributors, retailers, wholesalers and Traders in the
            region with over 20 years of experience in the industry.
          </p>
        </Col>
        <Col md={3}>
          <h3>Useful Links</h3>
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Products</a>
          <a href=''>Services</a>
          <a href=''>Contact</a>
        </Col>
        <Col md={3}>
          <h3>Head Office</h3>
          <div className='location-info'>
            <i class='fa fa-solid fa-location-dot'></i>
            <p>
              125/127,Kazi Sayed Street, Navjivan Building, Mezzanine Floor,
              Masjid Bunder(West),Mumbai - 400003
            </p>
          </div>
          <div className='contact-info'>
            <i class='fa fa-solid fa-phone'></i>
            <a href='tel:+918688954406'> +91 86889 54406</a>
          </div>
          <div className='contact-info2'>
            <i class='fa fa-solid fa-phone'></i>
            <a href='tel:+918657585994'>+91 86575 85994</a>
          </div>
          <div className='email-info'>
            <i class='fa fa-regular fa-envelope'></i>
            <a href='mailto:moiz@itradebharat.com'> moiz@itradebharat.com</a>
          </div>
        </Col>
        <Col md={3}>
          <h3>Newsletter</h3>
          <p>
            Submit to our newsletter & subscribe to our newsletter to be on the
            up and up
          </p>
          <form>
            <input type='email' placeholder='Enter your Email Address' />
            <button type='submit'>Subscribe →</button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
