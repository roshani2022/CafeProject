import React from "react";
const OrderContext = React.createContext({
  orders: [],
  addOrder: (order) => {},
  deleteOrder: (orderId) => {},
  orderDataAddHandler:(order)=>{},
  orderDataRemoveHandler:(orderId)=>{}
});

export default OrderContext;
