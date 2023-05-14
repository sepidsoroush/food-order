import styles from "../../styles/MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <div className={styles.form}>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" min={0} step={1} />
      <button>+ Add</button>
    </div>
  );
};

export default MealItemForm;
