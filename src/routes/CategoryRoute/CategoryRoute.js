import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./CategoryRoute.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoryRoute = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{category.toUpperCase()}</h1>

      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default CategoryRoute;
