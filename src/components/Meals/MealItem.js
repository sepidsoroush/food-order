import { useContext } from "react";
import styles from "../../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../context/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const amountHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={amountHandler} />
    </li>
  );
};

export default MealItem;
