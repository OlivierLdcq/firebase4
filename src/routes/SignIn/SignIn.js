import { React, useState, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  createUserData,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase";

import "./SignIn.scss";
import Register from "../../components/Register/Register";
const SignIn = () => {
  const getRedirectResultSteady = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      createUserData(response.user);
    }
  };

  useEffect(() => {
    getRedirectResultSteady();
  }, []);

  const ButtonSignIn1 = async () => {
    const { user } = await signInWithGooglePopUp();
    console.log(user.uid);
    createUserData(user);
  };
  const ButtonSignIn2 = async () => {
    signInWithGoogleRedirect();
  };

  /// ********** ///
  return (
    <div className="SignIn">
      <button onClick={ButtonSignIn1}>SignInWithGoogle</button>
      <button onClick={ButtonSignIn2}>signInWithGoogleRedirect</button>
      <Register />
    </div>
  );
};

export default SignIn;
