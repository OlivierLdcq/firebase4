import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { NavigationContainer } from "./Navigation.STYLE.jsx";
import { ReactComponent as Icon } from "./icon.svg";
import { ReactComponent as Icon2 } from "../../assets/circles.svg";
import { ReactComponent as Icon3 } from "../../assets/waves.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { cartOpen, setCartOpen } = useContext(CartContext);
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log("this is the current User from context : ");
  console.log(currentUser);
  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null);
  };

  console.log("this tis cartOPen", cartOpen);
  return (
    <>
      <NavigationContainer>
        <Link className="LogoCtn" to="/">
          {" "}
          <div className="NavLogo">
            <Icon3 id="logo" />
          </div>
        </Link>
        <div className="navLinksCtn">
          <Link className="navLink" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="navLink" onClick={signOutHandler}>
              SIGNOUT
            </span>
          ) : (
            <Link className="navLink" to="/signin">
              SIGNIN
            </Link>
          )}
          <CartIcon />
        </div>
        {cartOpen && <CartDropDown className="CartDropDown" />}
      </NavigationContainer>{" "}
      <Outlet />
    </>
  );
};

export default Navigation;
