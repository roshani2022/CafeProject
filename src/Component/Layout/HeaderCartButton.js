import React,{useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import OrderContext from "../Store/OrderContext";
const HeaderCartButton = (props) => {
  const cartContext = useContext(OrderContext);

  

  let quantity = 0;

  cartContext.orders.forEach(order=>{
    quantity=quantity+ Number(order.quantity);
  })


  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span>{cartContext.msg}</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
