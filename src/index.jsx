import React from 'react';
import ReactDOM from 'react-dom/client';
import 'sweetalert2/dist/sweetalert2.js'
import { Provider } from 'react-redux'

import './index.scss';
import Routes from './Routes';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
