import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ShopRoute.scss";
import { ProductsContext } from "../../contexts/products.context";
const ShopRoute = () => {
  const { products, setProducts } = useContext(ProductsContext);
  return (
    <div className="ShopRouteCtn">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ShopRoute;
