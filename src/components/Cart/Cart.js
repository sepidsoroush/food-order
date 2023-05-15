import { useContext } from "react";
import styles from "../../styles/Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { updatedCart } = useContext(CartContext);
  console.log(updatedCart);
  return (
    <Modal>
      <div className={styles["cart-items"]}>
        {updatedCart.length > 0 &&
          updatedCart.map((item) => (
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