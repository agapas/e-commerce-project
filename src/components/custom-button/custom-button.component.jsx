import React from "react";

import "./custom-button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
};

export const CustomButton = ({ buttonType, children, ...otherProps }) => (
  <button
    className={`custom-button ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
  </button>
);
