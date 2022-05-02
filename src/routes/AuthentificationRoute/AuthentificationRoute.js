import "./AuthentificationRoute.scss";
import Register from "../../components/Register/Register";
import SignIn from "../../components/SignIn/SignIn";
const AuthentificationRoute = () => {
  return (
    <div className="AuthentificationRoute">
      <SignIn />
      <Register />
    </div>
  );
};

export default AuthentificationRoute;
