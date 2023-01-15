<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
ReactDOM.render(
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
>>>>>>> af8796a0b1d132243256c8b42b84b892d856494a
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
<<<<<<< HEAD
  </React.StrictMode>,
  document.getElementById("root")
=======
  </React.StrictMode>
>>>>>>> af8796a0b1d132243256c8b42b84b892d856494a
);
