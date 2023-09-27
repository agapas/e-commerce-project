import React, { useState } from "react";

import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";

import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import "./sign-up.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <div className="info">Register with your email and password</div>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            name: "displayName",
            type: "text",
            required: true,
            value: displayName,
            onChange,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            name: "email",
            type: "email",
            required: true,
            value: email,
            onChange,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            name: "password",
            type: "password",
            required: true,
            autoComplete: "new-password",
            value: password,
            onChange,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            name: "confirmPassword",
            type: "password",
            required: true,
            autoComplete: "new-password",
            value: confirmPassword,
            onChange,
          }}
        />
        <CustomButton type="submit">Create Account</CustomButton>
      </form>
    </div>
  );
};
