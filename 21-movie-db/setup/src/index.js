<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
>>>>>>> af8796a0b1d132243256c8b42b84b892d856494a
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
<<<<<<< HEAD
  </React.StrictMode>,
  document.getElementById("root")
=======
  </React.StrictMode>
>>>>>>> af8796a0b1d132243256c8b42b84b892d856494a
);
