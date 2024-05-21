import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <div className='category-card-container'>
      <div className='image-container'>
        <img
          src={category.image}
          alt={category.name}
          className='category-image'
        />
        <h3 className='category-title'>{category.name}</h3>
      </div>
      <p className='category-description'>{category.text}</p>
    </div>
  );
};

export default CategoryCard;
