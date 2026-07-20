import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from 'react-router-dom'
import "./i18n/i18n.js";

import App from './App'
import './index.css'
import './styles/variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)