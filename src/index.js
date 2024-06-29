import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

//BrowserRoute --> all child components within the application will have 
// access to routing features provided by react-router-dom library

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
