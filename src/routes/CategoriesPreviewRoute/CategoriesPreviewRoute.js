import React, { Fragment, useContext } from "react";
import "./CategoriesPreviewRoute.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
const CategoriesPreviewRoute = () => {
  const { categoriesMap, setCategoriesMap } = useContext(CategoriesContext);

  return (
    <>
      <div className="ShopRouteCtn">
        {Object.keys(categoriesMap).map((title) => {
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
