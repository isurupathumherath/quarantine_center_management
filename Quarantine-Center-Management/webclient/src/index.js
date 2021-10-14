import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { OrderContextProvider } from "./components/FoodManagement/store/orderContext";
import { FavouriteContextProvider } from "./components/FoodManagement/store/FavouriteContext";

/* Janith Gamage On - 13/09/2021  */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/FinanceReducers';

import Routes from "./Routes";

/* Janith Gamage On - 13/09/2021  */
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store} >
    <OrderContextProvider>
      <FavouriteContextProvider>
        <React.StrictMode>
          <Routes />
        </React.StrictMode>
      </FavouriteContextProvider>
    </OrderContextProvider>
  </Provider>
  ,
  document.getElementById("root")
);
