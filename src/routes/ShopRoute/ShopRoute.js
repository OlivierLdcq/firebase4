import { Route, Routes } from "react-router-dom";
import CategoriesPreviewRoute from "../CategoriesPreviewRoute/CategoriesPreviewRoute";
import CategoryRoute from "../CategoryRoute/CategoryRoute";
import "./ShopRoute.scss";
const ShopRoute = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewRoute />} />
      <Route path=":category" element={<CategoryRoute />} />
    </Routes>
  );
};

export default ShopRoute;
