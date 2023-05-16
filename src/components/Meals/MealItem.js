import { useContext } from "react";
import styles from "../../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../context/cart-context";

const MealItem = (props) => {
  const { cartCtx } = useContext(CartContext);

  const AddMealHandeler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price * amount,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <MealItemForm onAddItem={AddMealHandeler} />
    </li>
  );
};

export default MealItem;
