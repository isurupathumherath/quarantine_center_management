import { createContext, useState } from "react";

const OrderContext = createContext({
  orders: [],
  totalOrders: 0,
  totalPrice: 0,
  addOrder: (orderedFood) => {},
  removeOrder: (foodID) => {},
  isOrdered: (foodID) => {},
});

export function OrderContextProvider(props) {
  const [userOrders, setUserOrders] = useState([]);
  const [tot, setTot] = useState();

  function addOrdersHandler(orderedFood) {
    //passing a function to state updating functin. And that function will allways get the latest state snapshot
    setTot(tot + orderedFood.price);
    setUserOrders((prevUserOrder) => {
      return prevUserOrder.concat(orderedFood);
    });
  }

  function removeOrdersHandler(foodID) {
    setUserOrders((prevUserOrder) => {
      //Filter returns a new array where we can filter out items
      // I am filtering out foods that have the same id as the function parameter

      return prevUserOrder.filter((food) => food.id !== foodID);
    });
  }

  function isOrderedHandler(foodID) {
    return userOrders.some((food) => food.id === foodID);
  }

  const context = {
    orders: userOrders,
    totalOrders: userOrders.length,
    addOrder: addOrdersHandler,
    removeOrder: removeOrdersHandler,
    isOrdered: isOrderedHandler,
  };
  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
