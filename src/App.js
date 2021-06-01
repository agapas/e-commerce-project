import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LogInAndRegisterPage from './pages/log-in-and-register/log-in-and-register.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={LogInAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
