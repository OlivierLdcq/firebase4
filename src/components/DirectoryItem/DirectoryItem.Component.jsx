import React from "react";
import {
  DirectoryCS,
  BodyCS,
  BackgroundImageCS,
} from "./DirectoryItem.Style.js";
const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  return (
    <DirectoryCS>
      <BackgroundImageCS imageUrl={imageUrl} />
      <BodyCS>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </BodyCS>
    </DirectoryCS>
  );
};

export default DirectoryItem;
