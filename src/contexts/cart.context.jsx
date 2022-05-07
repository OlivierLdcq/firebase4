import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  console.log(existingCartItem);
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (productToAdd.id === cartItem.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  increaseProductInCart: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
  removeItemToCart: () => {},
  totalDue: 0,
  setTotalDue: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalDue, setTotalDue] = useState(0);
  const location = useLocation();

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove, order) => {
    setCartItem(removeCartItem(cartItems, cartItemToRemove, order));
  };

  const removeCartItem = (cartItems, cartItemToRemove, order) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1 || order === "delete") {
      return cartItems.filter((cartItem) => {
        return cartItem.id !== cartItemToRemove.id;
      });
    }
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToRemove.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
  };
  const getTotalQuantity = (cartItems) => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
  };
  const getTotalDue = (cartItems) => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    setTotalQuantity(getTotalQuantity(cartItems));
    setTotalDue(getTotalDue(cartItems));
  }, [cartItems]);
  useEffect(() => {
    setCartOpen(false);
  }, [location]);

  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    removeItemToCart,
    totalQuantity,
    totalDue,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
