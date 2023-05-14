import styles from "../../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const AddMealHandeler = (amount) => {
    console.log(amount);
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
