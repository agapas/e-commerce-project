import { useState } from "react";
// import { getRedirectResult } from "firebase/auth";

import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";

import {
  // auth,
  // signInWithGoogleRedirect,
  signInWithGoogle,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   },
  //   []
  // );

  const signInGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    await createUserDocumentFromAuth(user);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      // auth error codes list: https://firebase.google.com/docs/auth/admin/errors
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <div className="info">Sign in with your email and password</div>
      <form onSubmit={onSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            name: "email",
            type: "email",
            required: true,
            autoComplete: "username",
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
            autoComplete: "current-password",
            value: password,
            onChange,
          }}
        />
        <div className="buttons-container">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            buttonType="google"
            onClick={signInGoogleUser}
          >
            Sign in with Google
          </CustomButton>
          {/* <CustomButton
            type="button"
            buttonType="google"
            onClick={signInWithGoogleRedirect}
          >
            Sign in with Google Redirect
          </CustomButton> */}
        </div>
      </form>
    </div>
  );
};
