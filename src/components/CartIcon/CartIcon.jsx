import React, { useContext } from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({ children }) => {
  const { cartOpen, setCartOpen, totalQuantity } = useContext(CartContext);
  const cartIconCliked = (e) => {
    console.log("got clicked");
    setCartOpen(!cartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={cartIconCliked}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
