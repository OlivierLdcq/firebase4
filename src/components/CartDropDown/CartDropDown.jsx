import React from "react";
import "./CartDropDown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {/* <Link to="/checkout"> */}
      <Button onClick={checkOutClicked} buttonType="default">
        checkout
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default CartDropDown;
