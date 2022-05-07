import React from "react";
import "./CheckOutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckOutItem = ({ item }) => {
  const { id, name, price, imageUrl, quantity } = item;
  const actualPrice = price * quantity;
  const { cartItems, increaseProductInCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  //   console.log(cartItems);
  return (
    <div className="CheckOutItem" key={id}>
      <div className="checkOutCtn">
        {" "}
        <img className="image" src={imageUrl} />
        <div className="description">{name}</div>
        <div className="price">{actualPrice}</div>
        <div className="quantity">
          <span id="incredecre" onClick={() => removeItemToCart(item)}>
            &#10094;
          </span>
          <span>{quantity}</span>
          <span
            id="incredecre"
            onClick={() => {
              addItemToCart(item);
            }}
          >
            &#10095;
          </span>
        </div>
        <div
          className="remove"
          style={{ marginLeft: "200px" }}
          onClick={() => removeItemToCart(item, "delete")}
        >
          ╳
        </div>
      </div>

      <hr />
    </div>
  );
};

export default CheckOutItem;
