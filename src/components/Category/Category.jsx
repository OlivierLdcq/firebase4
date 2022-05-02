import React from "react";
import "./Category.scss";
const Category = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="Category">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="categoryBody">
        {" "}
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Category;
