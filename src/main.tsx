import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Updated import
import './index.css';

// Non-null assertion assuming 'root' element always exists
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);