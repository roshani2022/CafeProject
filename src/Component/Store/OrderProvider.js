import React, { useState } from "react";
import OrderContext from "./OrderContext";

const OrderProvider = (props) => {
  const [orders, setOrders] = useState([]);

  const addOrderToCartHandler = (order) => {
    const existingOrderIndex = orders.findIndex(
      (cartItem) => cartItem.orderId === order.orderId
    );

    if (existingOrderIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedOrders = [...orders];
      console.log(updatedOrders[existingOrderIndex]);
      updatedOrders[existingOrderIndex].quantity += 1;
      setOrders(updatedOrders);
    } else {
      // If the item doesn't exist, add it as a new item
      setOrders((prevOrders) => [...prevOrders, { ...order, quantity: 1 }]);
    }
  };

  const removeOrderToCartHandler = (orderId) => {
    const existingOrderIndex = orders.findIndex(
      (cartItem) => cartItem.orderId === orderId
    );

    if (existingOrderIndex !== -1) {
      // If the item exists in the cart, get its current quantity
      const currentOrder = orders[existingOrderIndex];
      console.log(currentOrder);

      // If the quantity is greater than 1, decrement it by 1
      if (currentOrder.quantity > 1) {
        const updatedOrder = [...orders];
        updatedOrder[existingOrderIndex].quantity -= 1;
        setOrders(updatedOrder);
      } else {
        // If the quantity is 1, remove the item from the cart
        setOrders((prevOrder) =>
          prevOrder.filter((order) => order.orderId !== orderId)
        );
      }
    }
  };

  const clearCartHandler = () => {
    setOrders([]);
    // setTotalAmount(0);
  };

  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.OrderId !== orderId));
  };

  const cartContext = {
    orders: orders,
    addOrder: addOrderToCartHandler,
    deleteOrder: removeOrderToCartHandler,
    clearCart: clearCartHandler,
    msg: "Cilck Me!",
    orderDataAddHandler:addOrder,
    orderDataRemoveHandler:deleteOrder
  };

  return (
    <OrderContext.Provider value={cartContext}>
      {console.log("inside provider", orders)}
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
