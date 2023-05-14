import styles from "../../styles/MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <>
      <li className={styles.header}>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{props.price}</p>
      </li>
      <MealItemForm />
    </>
  );
};

export default MealItem;
