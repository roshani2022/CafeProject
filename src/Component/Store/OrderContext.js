import React from "react";
const OrderContext = React.createContext({
    orders:[],
    addOrder: (order) => {},
    deleteOrder: (orderId) => {},
})

export default OrderContext