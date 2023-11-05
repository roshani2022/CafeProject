import classes from "./CartItem.module.css";
const CartItem = (props) => {

  const price = `$${Number(props.orderPrice).toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.orderDish}</h2>
        <div className={classes.summary}>
          <span className={classes.id}>{props.orderId}</span>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.quantity}</span>
          <span className={classes.table}>{props.orderTable}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
