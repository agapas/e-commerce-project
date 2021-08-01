import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LogInAndRegisterPage from './pages/log-in-and-register/log-in-and-register.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';

class App extends React.Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='app'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={LogInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
