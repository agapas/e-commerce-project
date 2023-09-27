import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";

import "./authentication.styles.scss";

export const Authentication = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);
