import { useRef, useState } from "react";
import styles from "../../styles/MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const [inputIsValid, setInputIsValid] = useState(false);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount; // convert string to number
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setInputIsValid(true);
    }
    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {inputIsValid && <p>Please Enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
