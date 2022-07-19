import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import KryptoContext from './KryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <KryptoContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </KryptoContext>
);