import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import OrderContext from "../Store/OrderContext";
import React, { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(OrderContext);

  let totalAmount = 0;
  cartContext.orders.forEach((order) => {
    totalAmount += order.orderPrice * order.quantity;
  });

  const cartItemAddHandler = (order) => {
    cartContext.addOrder({
      ...order,
      quantity: Number(order.quantity + 1),
    });
  };

  const cartItemRemoveHandler = (orderId) => {
    cartContext.deleteOrder(orderId);
  };

  const hasItem = cartContext.orders.length > 0;

  const orderHandler = () => {
    cartContext.clearCart();
    totalAmount = 0;
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.orders.map((order) => (
        <CartItem
          key={order.orderId}
          id={order.orderId}
          orderPrice={order.orderPrice}
          quantity={order.quantity}
          orderDish={order.orderDish}
          orderTable={order.orderTable}
          onRemove={() => cartItemRemoveHandler(order.orderId)}
          onAdd={() => cartItemAddHandler(order)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
