import React from "react";

import { BaseButton, InvertedButton, GoogleButton } from "./Button.Style.js";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  default: "default",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

  const CustomButton = getButton(buttonType);

  return (
    <div>
      {" "}
      <CustomButton {...otherProps}>{children} </CustomButton>{" "}
    </div>
  );
};

export default Button;
