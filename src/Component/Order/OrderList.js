import React from "react";
import Card from "../UI/Card";
import classes from './OrderList.module.css'
import Button from "../UI/Button";
const OrderList = (props) => {
    const table1Order = props.orders.filter((order) => order.table === "Table1");
  const table2Order = props.orders.filter(
    (order) => order.table === "Table2"
  );
  const table3Order = props.orders.filter(
    (order) => order.table === "Table3"
  );
  const showOrder = (orders) => {
    return orders.map((order) => (
      <li key={order.id}>
        
         {order.price} - {order.table}  - {order.dish}{"  "}
        <Button type="button" onClick={() => props.onClick(order.OrderId)}>
          Delete Order
        </Button>
      </li>
    ));
  };
  return (
    <Card className={classes.orderlist}>
      <div className="table">
        <h2>Table1</h2>
        
        <ul>{showOrder(table1Order)}</ul>
      </div>
      <div className="table">
        
        <h2>Table2</h2>
        <ul>{showOrder(table2Order)}</ul>
      </div>
      <div className="table">
       
        <h2>Table3</h2>
        <ul>{showOrder(table3Order)}</ul>
      </div>
    </Card>
  );
};
export default OrderList;