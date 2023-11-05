import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import OrderContext from "../Store/OrderContext";
import React,{useContext} from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContext  = useContext(OrderContext)

    const hasItem = cartContext.orders.length > 0;

    const cartItemAddHandler = (order) => {
        cartContext.addOrder({
          ...order,
         
        })
      }
    
      const cartItemRemoveHandler  = (id) => {
        cartContext.deleteOrder(id)
       
      }
    
    const cartItems = (
   
        <ul className={classes["cart-items"]}>
         
         
          {cartContext.orders.map((order) => (
            <CartItem
            key ={order.id}
            id={order.orderId}
            price={order.orderPrice}
            dish={order.orderDish}
            table={order.orderTable}
              onRemove={()=>cartItemRemoveHandler(order.id)}
              onAdd = {()=>cartItemAddHandler(order)}
            />
          
          ))}
          
        </ul>
         
      );
      
  return(
    <Modal onClose={props.onClose}>
    {cartItems}
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItem && (
        <button className={classes.button}>Order</button>
      )}
      
    </div>
  </Modal>
  )
}

export default Cart;