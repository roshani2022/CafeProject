import React,{useState} from "react";
import OrderContext from "./OrderContext";

const OrderProvider = (props) => {
    const [orders, setOrders] = useState([]);
    const [isOrder, setIsOrder] = useState(false);
  
    const addOrder = (orderId, orderPrice, orderDish, orderTable) => {
      // Add the order to the orders array and update the local storage
      const newOrder = {
        OrderId: orderId,
        price: orderPrice,
        dish: orderDish,
        table: orderTable,
        id: Math.random().toString(),a
      };
      localStorage.setItem(orderId.toString(), JSON.stringify(newOrder));
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setIsOrder(true);
  };

  const deleteOrder = (orderId) => {
    // Remove the order from the orders array and local storage
    localStorage.removeItem(orderId.toString());
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.OrderId !== orderId)
    );
  };
  const contextValue = {
    orders,
    isOrder,
    addOrder,
    deleteOrder,
  };
  return (
    <OrderContext.Provider value={contextValue}>
      {props.children}
    </OrderContext.Provider>
  );
}

export default OrderProvider;