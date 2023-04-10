import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './App.css'
import { HelmetProvider } from 'react-helmet-async';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
