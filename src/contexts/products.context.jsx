import { createContext, useState, useEffect } from "react";
import shopData from ".././shopData.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const value = { products, setproducts };
  const defaultShopData = shopData;
  console.log(products);
  useEffect(() => {
    setproducts(defaultShopData);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
