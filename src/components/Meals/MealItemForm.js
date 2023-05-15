import { useState } from "react";
import styles from "../../styles/MealItemForm.module.css";

const MealItemForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddItem(+enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input}>
        <label htmlFor={props.id}>Amount</label>
        <input
          id={props.id}
          label="Amount"
          type="number"
          min={1}
          max={5}
          step={1}
          defaultValue={1}
          onChange={amountHandler}
        />
      </div>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
