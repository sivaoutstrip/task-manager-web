import React from 'react';
import ReactDOM from 'react-dom/client';
import 'sweetalert2/dist/sweetalert2.js'

import './index.scss';
import Routes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
