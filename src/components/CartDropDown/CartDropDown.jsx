import React from "react";
import "./CartDropDown.scss";
import Button from "../Button/Button";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>checkout</Button>
    </div>
  );
};

export default CartDropDown;
