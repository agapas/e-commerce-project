import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';

// const DslrCamerasPage = () => (
//   <h1>Digital SLR Cameras</h1>
// );

// const MirrorlessCamerasPage = () => (
//   <h1>Mirrorless Cameras</h1>
// );

// const BridgeCamerasPage = () => (
//   <h1>Bridge Cameras</h1>
// );

// const CompactCamerasPage = () => (
//   <h1>Compact Cameras</h1>
// );

// const InstantCamerasPage = () => (
//   <h1>Instant Cameras</h1>
// );

// const ActionCamerasPage = () => (
//   <h1>GoPro & Action Cameras</h1>
// );

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route path='/dslr' component={DslrCamerasPage} />
        <Route path='/mirrorless' component={MirrorlessCamerasPage} />
        <Route path='/bridge' component={BridgeCamerasPage} />
        <Route path='/compact' component={CompactCamerasPage} />
        <Route path='/instant' component={InstantCamerasPage} />
        <Route path='/action' component={ActionCamerasPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
