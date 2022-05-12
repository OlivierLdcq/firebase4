import React from "react";
// import "./CartDropDown.STYLE.js";
import {
  CartDropDownCTN,
  CartItems,
  EmptyMessage,
} from "./CartDropDown.Style.js";
import Button from "../Button/Button.Component.jsx";
import CartItem from "../CartItem/CartItem.Component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkOutClicked = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownCTN>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>your card is empty </EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button onClick={checkOutClicked} buttonType="base">
          checkout
        </Button>
      </Link>
    </CartDropDownCTN>
  );
};

export default CartDropDown;
