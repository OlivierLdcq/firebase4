import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.scss";
import { ReactComponent as Icon } from "./icon.svg";
const Navigation = () => {
  return (
    <>
      <div className="Navigation">
        <Link className="LogoCtn" to="/home">
          {" "}
          <div className="NavLogo">
            <Icon />
          </div>
        </Link>
        <div className="navLinksCtn">
          <Link className="navLink" to="/home">
            SHOP
          </Link>
          <Link className="navLink" to="/signin">
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
