import React from "react";
const OrderContext = React.createContext({
    orders: [],
    isOrder: false,
    addOrder: (orderId, orderPrice, orderDish, orderTable) => {},
    deleteOrder: (orderId) => {},
})

export default OrderContext