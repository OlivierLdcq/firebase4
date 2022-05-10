import React, { Fragment, useContext } from "react";
import "./CategoriesPreviewRoute.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
const CategoriesPreviewRoute = () => {
  const { categoriesMap, setCategoriesMap } = useContext(CategoriesContext);
  console.log("hello from shopRoute");
  console.log(categoriesMap);

  return (
    <>
      <div className="ShopRouteCtn">
        {Object.keys(categoriesMap).map((title) => {
          console.log(categoriesMap);
          console.log(Object.keys(categoriesMap));
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })}
      </div>
    </>
  );
};

export default CategoriesPreviewRoute;
