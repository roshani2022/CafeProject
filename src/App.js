
import React, {useState,useEffect} from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

const App = ()  => {

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

  return (
    <div className="App">
      <Order onOrder={addOrderHandler}></Order>
      {<h1>Orders</h1>}
      <OrderList  orders={orderList}
        onOrder={isOrder}
        onClick={deleteOrderHandler}></OrderList>
    </div>
     );
    }
    export default App;