// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./components/reducers"; // Bu, Redux reducer'larınızı içeren dosyanın adı ve yoludur.
import "./index.css";
import App from "./App";

// Redux store'u oluştur
const store = createStore(rootReducer); // rootReducer, birleştirilmiş tüm reducer'larınızı içeren dosyanın adıdır.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Diğer kodlar...
