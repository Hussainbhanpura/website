import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-teriary fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Hidden brand
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          toggle='collapse'
          id='navbarTogglerDemo01'
        >
          <div className='ms-auto'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='me-2 nav-item'>
                <a className='nav-link act' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='me-2 nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdownMenuLink'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  About
                </a>
                <div
                  className='dropdown-menu'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <a className='dropdown-item' href='#'>
                    Our Team
                  </a>
                  <a className='dropdown-item' href='#'>
                    Our Strength
                  </a>
                  <a className='dropdown-item' href='#'>
                    Vision & Mission
                  </a>
                </div>
              </li>
              <li className='me-2 nav-item dropdown2 dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Products
                </a>
                <div
                  className='dropdown-menu menu'
                  aria-labelledby='navbarDropdown'
                >
                  <div className='navbar-container'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <img
                          src={require("../assests/iphone.png")}
                          alt='Phone image'
                          className='img-fluid'
                        />
                        <h3 className='menu-heading'>Mobile Phones</h3>
                        <p>Android Phones</p>
                        <p>iOS(iPhone) Phones</p>
                        <p>Budget Phones</p>
                        <p>Flagship Phones</p>
                        <p>5G Phones</p>
                        <p>Gaming Phones</p>
                      </div>
                      <div className='col-md-2'>
                        <img
                          src={require("../assests/airpods.jpeg")}
                          alt='Accessories'
                          className='img-fluid'
                        />
                        <h3 className='menu-heading'>Accessories</h3>
                        <p>Wired Headsets</p>
                        <p>Bluetooth Headsets</p>
                        <p>Gaming Headsets With Surround Sound</p>
                        <p>Active Noise-Cancelling Headsets</p>
                        <p>Tethered VR Headsets</p>
                        <p>Business/Office Headsets</p>
                      </div>
                      <div className='col-md-2'>
                        <img
                          src={require("../assests/ipad.png")}
                          alt='Tablet'
                          className='img-fluid'
                        />
                        <h3 className='menu-heading'>Tablets</h3>
                        <p>Android Tablet</p>
                        <p>iOS (iPad) Tablets</p>
                        <p>Windows Tablets</p>
                        <p>Mid-Range Tablets</p>
                        <p>High End/ Tablets PCs</p>
                      </div>
                      <div className='col-md-2'>
                        <img
                          src={require("../assests/printer.png")}
                          alt='Printer'
                          className='img-fluid'
                        />
                        <h3 className='menu-heading'>Printers</h3>
                        <p>Inkjet Printers</p>
                        <p>Laser Printers</p>
                        <p>All-in-one Printers</p>
                        <p>Photo Printers</p>
                      </div>
                      <div className='col-md-2'>
                        <img
                          src={require("../assests/purifers.png")}
                          alt='Household Appliances'
                          className='img-fluid'
                        />
                        <h3 className='menu-heading'>Appliances</h3>
                        <p>Vacuum Cleaners</p>
                        <p>Air Purifiers</p>
                        <p>Water Purifiers</p>
                        <p>Photo Printers</p>
                      </div>
                      <div className='col-md-2'>
                        <img
                          src={require("../assests/smartwatch.png")}
                          alt='SmartWatch'
                          className='img-fluid'
                        />
                        <h3 className='menu-heading'>Smart Watches</h3>
                        <p>Apple Watch (watchOS)</p>
                        <p>Wear OS</p>
                        <p>Fitness and Health-focused</p>
                        <p>Fashion-oriented Smartwatches</p>
                        <p>Standalone Smartwatches</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className='me-2 nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Services
                </a>
              </li>
              <li className='me-2 nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
