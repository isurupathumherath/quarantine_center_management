import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { OrderContextProvider } from "./components/FoodManagement/store/orderContext";
import { FavouriteContextProvider } from "./components/FoodManagement/store/FavouriteContext";
import Route from './Routes';

ReactDOM.render(
  <OrderContextProvider>
    <FavouriteContextProvider>
      <React.StrictMode>
        <Route />
      </React.StrictMode>
    </FavouriteContextProvider>
  </OrderContextProvider>,
  document.getElementById("root")
);
