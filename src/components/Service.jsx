import React from "react";
import "./Service.css";
import airplane from "../assests/icons/world.png";
import satelliteDish from "../assests/icons/satellite-dish.png";
const Service = () => {
  return (
    <div className='container'>
      <h3 className='heading text-center'>Services</h3>
      <hr />
      <div className='row'>
        <div className='col-md-4'>
          <i class='fa fa-solid fa-boxes-stacked service-icon'></i>
          <h6 className='service-heading'>Global Wholesale Trading</h6>
          <p className='service-description'>
            With our footprints across the globe, we can bring you the latest
            Mobility products at the most competitive prices, while managing
            swift turnaround times for deliveries and maintaining the highest
            standards of quality and compliance, as demanded by our Customers.
            As a TRA and ESMA registered company, you can count on iTrade Bharat
            every step of the way.
          </p>
          <blockquote className='service-quote'>
            "Connecting the world through seamless import and export solutions."
          </blockquote>
        </div>
        <div className='col-md-4'>
          <img src={airplane} className='icon' alt='airplane' />
          <h6 className='service-heading'>Export</h6>
          <p className='service-description'>
            Our vision is to offer our products and solutions in every region of
            the world. Through our expert import/expert services, we help you
            get consistent, high-quality support no matter where you are. As a
            TRA and ESMA registered company, you can count on iTrade Bharat
            every step of the way.
          </p>
          <blockquote className='service-quote'>
            "Connecting the world through seamless import and export solutions."
          </blockquote>
        </div>
        <div className='col-md-4'>
          <img src={satelliteDish} className='icon' alt='satellite-dish' />
          <h6 className='service-heading'>Telecom</h6>
          <p className='service-description'>
            There are more than 290 Telcos serving Middle East and African
            consumers. The region is growing at an exponential speed. The
            networks are varied from 2G to 5G to FTTH. Touch Tel provides top
            telcos with end-to-end device management, supply, and sales
            solutions from mobile devices, CPEs, and Smart home Automation.
          </p>
          <blockquote className='service-quote'>
            "Connecting the world through seamless import and export solutions."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Service;
