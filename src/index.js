import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import generateStore from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store= generateStore()
root.render(

  <Provider  store={store}>

    <App />

  </Provider>
);


