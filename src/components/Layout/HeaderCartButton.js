import { useContext } from "react";
import styles from "../../styles/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const totalOrders = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalOrders}</span>
    </button>
  );
};

export default HeaderCartButton;
