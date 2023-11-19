import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import AppRoutes from '../src/routes/AppRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/pets-project-front'>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);