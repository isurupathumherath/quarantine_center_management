import FeatherIcon from "feather-icons-react";
import React, { useContext, useState, useEffect } from "react";
import OrderContext from "../FoodManagement/store/orderContext";
export default function CartImage() {
  const orderedCtx = useContext(OrderContext);
  return (
    <div>
      <div className="input-group-append">
        <FeatherIcon
          icon="shopping-cart"
          borderColor="white"
          style={{ stroke: "black", marginRight: "10px" }}
        />
        <h4>Cart *</h4> <h4>{orderedCtx.totalOrders}</h4>
      </div>
    </div>
  );
}
