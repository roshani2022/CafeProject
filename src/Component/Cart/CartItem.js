import classes from './CartItem.module.css'
const CartItem = (props) => {
    return (
        <li className={classes['cart-item']}>
        <div>
          <div className={classes.summary}>
          <span className={classes.id}>{props.orderId}</span>
            <span className={classes.dish}>x{props.orderDish}</span>
            <span className={classes.price}>{props.orderPrice}</span>
            <span className={classes.table}>x{props.OrderTable}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
    )
}

export default CartItem