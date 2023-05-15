import styles from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal>
      <div className={styles["cart-items"]}>test</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$0.00</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
