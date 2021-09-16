import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { OrderContextProvider } from "./components/FoodManagement/store/orderContext";
import { FavouriteContextProvider } from "./components/FoodManagement/store/FavouriteContext";
ReactDOM.render(
  <OrderContextProvider>
    <FavouriteContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FavouriteContextProvider>
  </OrderContextProvider>,
  document.getElementById("root")
);
