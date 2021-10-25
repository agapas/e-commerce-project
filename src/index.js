import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

// Temporary fix for displaying images in dev and production (on Github Pages)
// in the case when HashRouter and session storage are used together
export const BASE_URL = process.env.NODE_ENV === 'development'
  ? `${window.location.pathname}/`
  : window.location.pathname;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
