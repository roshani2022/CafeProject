import React from "react";
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
        <button type="button" onClick={() => props.onClick(order.OrderId)}>
          Delete Order
        </button>
      </li>
    ));
  };
  return (
    <div class="order-list">
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
    </div>
  );
};
export default OrderList;