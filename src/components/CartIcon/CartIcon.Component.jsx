import React, { useContext } from "react";
import "./CartIcon.Style.js";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { CartIconSC, ShoppingIconSC, ItemCountSC } from "./CartIcon.Style.js";
const CartIcon = ({ children }) => {
  const { cartOpen, setCartOpen, totalQuantity } = useContext(CartContext);
  const cartIconCliked = (e) => {
    console.log("got clicked");
    setCartOpen(!cartOpen);
  };
  return (
    <CartIconSC onClick={cartIconCliked}>
      <ShoppingIconSC className="shopping-icon" />
      <ItemCountSC className="item-count">{totalQuantity}</ItemCountSC>
    </CartIconSC>
  );
};

export default CartIcon;
