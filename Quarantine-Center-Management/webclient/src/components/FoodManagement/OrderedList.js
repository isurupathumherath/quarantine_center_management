import React from "react";
import Orders from "./Orders";
export default function OrderedList(props) {
  return (
    <div>
      {props.order.map((order) => (
        <Orders
          key={order.id}
          id={order.id}
          name={order.name}
          image={order.image}
          price={order.price}
          description={order.description}
        />
      ))}
    </div>
  );
}
