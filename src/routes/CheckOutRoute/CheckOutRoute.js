//ensuite on map à travers la liste de cartItems et on affiche
//un composant <CheckOutItem qui va afficher : name,quantity,price, remove/>
// on doit pouvoir modifier la quantiy sur le Checkout Item,
// il faut que cete valeur se reflète dans le quantity de cartItem, et bien sûr le remove
// qui doit enlever l'élément de la liste CartItems

import React from "react";
import "./CheckOutRoute.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";

const CheckOutRoute = () => {
  const { cartItems, modifyItemsInCart, totalDue } = useContext(CartContext);

  return (
    <div className="CheckOutRoute">
      <div className="description-row">
        <span>Product</span>
        <span>Description</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Remove</span>
      </div>
      <hr></hr>
      <div className="checkOutItemsCtn">
        {cartItems.map((item) => {
          return <CheckOutItem item={item} key={item.id} />;
        })}
      </div>
      <h2>{`Total due : ${totalDue} $`}</h2>
    </div>
  );
};

export default CheckOutRoute;
