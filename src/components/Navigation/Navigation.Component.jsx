import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  LogoContainerSC,
  NavigationContainerSC,
  NavLinkSC,
  NavLinksContainerSC,
} from "./Navigation.Style.js";
import { ReactComponent as Icon3 } from "../../assets/waves.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../CartIcon/CartIcon.Component";
import CartDropDown from "../CartDropDown/CartDropDown.Component";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { cartOpen, setCartOpen } = useContext(CartContext);
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };

  return (
    <>
      <NavigationContainerSC>
        <LogoContainerSC to="/">
          {" "}
          <div className="NavLogo">
            <Icon3 id="logo" />
          </div>
        </LogoContainerSC>
        <NavLinksContainerSC>
          <NavLinkSC to="/shop">SHOP</NavLinkSC>
          {currentUser ? (
            <NavLinkSC as="span" onClick={signOutHandler}>
              SIGNOUT
            </NavLinkSC>
          ) : (
            <NavLinkSC to="/signin">SIGNIN</NavLinkSC>
          )}
          <CartIcon />
        </NavLinksContainerSC>{" "}
        {cartOpen && <CartDropDown className="CartDropDown" />}
      </NavigationContainerSC>{" "}
      <Outlet />
    </>
  );
};

export default Navigation;
