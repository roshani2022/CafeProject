import React, { useState } from "react";
import Input from "../UI/Input";
import Card from "../UI/Card";
import classes from "./OrderForm.module.css";
import Button from "../UI/Button";

const OrderForm = (props) => {
  const [orderId, setOrderId] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [OrderDish, setOrderDish] = useState("");
  const [OrderTable, setOrderTable] = useState("Table1");

  const idHandler = (event) => {
    setOrderId(event.target.value);
  };

  const priceHandler = (event) => {
    setOrderPrice(event.target.value);
  };

  const dishHandler = (event) => {
    setOrderDish(event.target.value);
  };
  const tableHandler = (event) => {
    setOrderTable(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onOrder(orderId, orderPrice, OrderDish, OrderTable);
    setOrderId("");
    setOrderPrice("");
    setOrderTable("Table1");
    setOrderDish("");
  };
  return (
    <Card className={classes.orderform}> 
      <form onSubmit={submitHandler}>
      <div className={classes.form}>
        <Input
          id="id"
          label="Unique Order Id:"
          type="number"
          value={orderId}
          onChange={idHandler}
        />

        <Input
          label="Choose Price:"
          type="number"
          id="price"
          value={orderPrice}
          onChange={priceHandler}
        />
        <Input
          label="Choose Dish:"
          type="text"
          id="dish"
          value={OrderDish}
          onChange={dishHandler}
        />
        <label htmlFor="Table">Choose Table: </label>
        <select value={OrderTable} onChange={tableHandler}>
          <option value="Table1">Table1</option>
          <option value="Table2">Table2</option>
          <option value="Table3">Table3</option>
        </select>
        </div>
        <div className={classes.action}>
          <Button type="submit">Add to bill</Button>
        </div>
      </form>
    </Card>
  );
};

export default OrderForm;
