import React from "react";
import Button from "../Button/Button";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="ProductCardCtn">
      <img src={imageUrl} alt={`${name}`} />
      <Button type="inverted">Add to Cart</Button>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
