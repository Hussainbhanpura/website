import React from "react";
import CategoryCard from "./CategoryCard";
import Accessories from "../assests/categories/Accessories_600x600.jpeg";
import Mobile_Phones from "../assests/categories/Mobile_Phones_600x600.jpeg";
import Tablets from "../assests/categories/Tablets_600x600.jpeg";
import Smartwatches from "../assests/categories/smartwatches.png";

import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      name: "Accessories",
      image: Accessories,
      text: "We at iTrade Bharat understand that each customer has unique needs. To cater to these needs and to ensure you have access to effectiveness and efficiency, we provide a wide range of electronic products. Our clients form the core of everything we do which helps us guarantee quality and excellence with each product.",
    },
    {
      name: "Mobile Phones",
      image: Mobile_Phones,
      text: "We at iTrade Bharat, take pride in being a premium distributor and wholesaler of the latest mobile phones along with catering to leading retailers as well. We assure you of quality, cost-effectiveness, and reliability.",
    },
    {
      name: "Tablets",
      image: Tablets,
      text: "We provide a broad line of branded tablets to help our clients achieve more. All our products offer countless, value-differentiated productivity features and enhancements that help you meet your diverse needs.",
    },
    {
      name: "Smartwatches",
      image: Smartwatches,
      text: "We at iTrade Bharat offer a sophisticated range of smartwatches designed to enhance your lifestyle and boost your productivity. Our smartwatches are equipped with the latest technology to keep you connected and in control. Experience seamless integration with your mobile devices, ensuring you stay ahead in both your personal and professional life. Embrace the convenience of wearable technology with our premium smartwatches.",
    },
  ];
  return (
    <div>
      <h2 className='heading text-center'>Our Products</h2>
      <p className='text'>
        Through efficient supply chain solutions, market intelligence, and a
        dedicated sales and customer team, we bring to you products that meet
        all your mobile, wireless, and electronic needs. We provide you with the
        latest products that help you stay connected and ahead of the curve at
        all times.
      </p>
      <div className='row categories'>
        {categories.map((category, index) => (
          <div key={index} className='col-lg-6 col-md-12'>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
