import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { bindActionCreators } from "redux";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const rootEl = document.getElementById("root");

const render = (Component) =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootEl
  );

render(App);
