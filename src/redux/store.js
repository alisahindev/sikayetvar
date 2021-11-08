import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducers";
import loggerMiddleware from "../utils/logger-middleware";
import notificationMiddleware from "../utils/notification-middleware";

const initalState = {};

const defaultMiddlewares = [
  thunk,
  promiseMiddleware,
  loggerMiddleware,
  notificationMiddleware,
];

const initalize = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...defaultMiddlewares))
);

export default initalize;
