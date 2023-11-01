import React,{useState,useEffect, Fragment } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

const Order = (props) => {

  const [orderList, setOrderList] = useState([]);
  const [isOrder, setIsOrder] = useState(false);
  
  useEffect(() => {
    const storedOrders = Object.values(localStorage).map((item) => JSON.parse(item));
    setOrderList(storedOrders);
   
  }, []);

  const addOrderHandler = (oId, oPrice, odish, oTable) => {
    const newOrder = {
      OrderId: oId,
      price: oPrice,
      dish: odish,
      table: oTable,
      id: Math.random().toString(),
    };

    localStorage.setItem( oId.toString(),JSON.stringify(newOrder));
    const updatedList = [...orderList, newOrder];
    setOrderList(updatedList);
    setIsOrder(true);
  };

  const deleteOrderHandler = (oId) => {

    localStorage.removeItem(oId.toString());
  
    
    const updatedList = orderList.filter((order) => order.OrderId !== oId);
    setOrderList(updatedList);
  };
   return(
    <Fragment>
    <OrderForm onOrder={addOrderHandler}></OrderForm>
    {<h1>Orders</h1>}
    <OrderList  orders={orderList}
      onOrder={isOrder}
      onClick={deleteOrderHandler}></OrderList>
    </Fragment>
   ) 
 
};
export default Order;

