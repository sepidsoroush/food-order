import styles from "../../styles/MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <div className={styles.form}>
      <Input
        id={"amount_" + props.id}
        label="Amount"
        type="number"
        min={1}
        max={10}
        step={1}
      />
      <button>+ Add</button>
    </div>
  );
};

export default MealItemForm;
