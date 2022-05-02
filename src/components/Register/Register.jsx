import React from "react";
import "./Register.scss";
import { useState } from "react";
import {
  FNcreateUserWithEmailAndPassword,
  createUserData,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
const Register = () => {
  const defaultRegisterForm = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [registerForm, setRegisterForm] = useState(defaultRegisterForm);
  const resetFormField = () => {
    setRegisterForm(defaultRegisterForm);
  };

  const register = async (e) => {
    e.preventDefault();
    const result = await FNcreateUserWithEmailAndPassword(registerForm);
    console.log("this is result :", result);
    createUserData(result.user, { displayName });
    resetFormField();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegisterForm({ ...registerForm, [name]: value });
  };
  const { displayName, email, password } = registerForm;
  console.log(registerForm);

  /// *********** ///
  return (
    <div className="Register">
      <h2>Don't have an account ?</h2>
      <span>Register with your email and password</span>
      <form onSubmit={register}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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

        {/* <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        /> */}
        <Button type="submit" buttonType="default">
          register{" "}
        </Button>
      </form>
    </div>
  );
};

export default Register;
