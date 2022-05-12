import React from "react";
import "./CartItem.Style.js";
import { CartItemSC, ItemDetailsSC } from "./CartItem.Style.js";
const CartItem = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  return (
    <CartItemSC>
      <img src={imageUrl} alt={name} />
      <ItemDetailsSC>
        <span className="name">{name}</span>
        <span className="price">
          {quantity}x{price}
        </span>
      </ItemDetailsSC>
    </CartItemSC>
  );
};

export default CartItem;
