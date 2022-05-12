import { React, useState, useContext } from "react";
import {
  createUserData,
  FNsignInWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utils/firebase/firebase";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.Component.jsx";
import FormInput from "../FormInput/FormInput.Component.jsx";
import { UserContext } from "../../contexts/user.context";

import "./SignIn.scss";

const SignIn = () => {
  // console.log(BUTTON_TYPE_CLASSES.inverted);
  const defaultSignInForm = {
    email: "",
    password: "",
  };
  const signin = async (e) => {
    e.preventDefault();

    resetFormField();
  };

  // const { setCurrentUser } = useContext(UserContext);
  const [signInForm, setSignInForm] = useState(defaultSignInForm);
  const resetFormField = () => {
    setSignInForm(defaultSignInForm);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setSignInForm({ ...signInForm, [name]: value });
  };
  const { email, password } = signInForm;

  const signInSubmit = async (e) => {
    e.preventDefault();
    console.log("signInsubmit");
    if (!email || !password) return;
    try {
      const result = await FNsignInWithEmailAndPassword(signInForm);
      // console.log(result);
      if (result.uid) {
        console.log("hey ! :) we have a valid user !");
        // setCurrentUser(result);
        resetFormField();
      }
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("user is not found");
          break;
        case "auth/wrong-password":
          alert("incorect email/password combination");
          break;
        default:
          console.log(err);
          break;
      }
    }
  };

  const SignInWithGoogleSubmit = async () => {
    await signInWithGooglePopUp();
    // console.log(user.uid);
  };
  // console.log(signInForm);

  return (
    <div className="SignIn">
      <h2>SignIn</h2>
      <span>SignIn with your email and password or signin with Google</span>
      <form onSubmit={signInSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="btnBlock">
          {" "}
          <Button type="submit" buttonType="base">
            SignIn
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={SignInWithGoogleSubmit}
          >
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
