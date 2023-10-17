import { useState } from "react";

const Order = (props) => {

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
        <div className="Order">
          <form onSubmit={submitHandler}>
          <label htmlFor="ID">Unique Order Id:</label>
        <input id="id" type="number" value={orderId} onChange={idHandler} />
        <label htmlFor="price">Choose Price:</label>
        <input
          type="number"
          id="price"
          value={orderPrice}
          onChange={priceHandler}
        />
        <label htmlFor="dish">Choose Dish:</label>
        <input type="text" id="dish" value={OrderDish} onChange={dishHandler} />
        <label htmlFor="Table">Choose Table: </label>
        <select value={OrderTable} onChange={tableHandler}>
          <option value="Table1">Table1</option>
          <option value="Table2">Table2</option>
          <option value="Table3">Table3</option>
        </select>

        <button type="submit">Add to bill</button>
      </form>
    </div>
  );
};
export default Order;

