import { useContext } from "react";
import styles from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  return (
    <Modal>
      <div className={styles["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItem && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
