import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

import Navigation from "./components/navigation/navigation.component";

import { Authentication } from "./routes/authentication/authentication.component";
import CheckoutPage from "./routes/checkout/checkout.component";
import { HomePage } from "./routes/homepage/homepage.component";
import { ShopPage } from "./routes/shop/shop.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = onAuthStateChangedListener(async (userAuth) => {
      if (userAuth) {
        const userSnapshot = await createUserDocumentFromAuth(userAuth);
        setCurrentUser({
          id: userSnapshot.id,
          ...userSnapshot.data(),
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Navigation />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route
            path="auth"
            element={
              this.props.currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <Authentication />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
