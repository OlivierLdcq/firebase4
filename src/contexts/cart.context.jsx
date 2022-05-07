import { createContext, useEffect, useState } from "react";

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
  totalQuantity: 0,
  setTotalQuantity: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItems, productToAdd));
  };

  const getTotalQuantity = (cartItems) => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
  };
  console.log(totalQuantity);
  useEffect(() => {
    const result = getTotalQuantity(cartItems);
    setTotalQuantity(result);
  }, [cartItems]);
  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    totalQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
