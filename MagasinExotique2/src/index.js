import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; // si ca génère une erreur une erreur il faut décommenter

const root = ReactDOM.createRoot(document.getElementById('root')); // localiser dans le root dans le document HTML on remplace
// par tous ce qu'il y a dans App

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); // si ca génère une erreur une erreur il faut décommenter
