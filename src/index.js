import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CSS/style.css'
import './CSS/mediaQuery.css'
import App from './App';
import 'react-notifications-component/dist/theme.css'
import "react-circular-progressbar/dist/styles.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
