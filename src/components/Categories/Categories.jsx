import React from "react";
import Category from "../Category/Category";
import "./Categories.scss";
const Categories = () => {
  // { id: 1, title: "sneakers" },
  // { id: 2, title: "hats" },
  // { id: 3, title: "shirts" },
  // { id: 4, title: "men" },
  // { id: 5, title: "women" },

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  /// ______
  return (
    <div className="Categories">
      {categories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Categories;