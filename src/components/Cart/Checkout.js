import useInput from "../../hooks/use-input";
import styles from "../../styles/Checkout.module.css";

const Checkout = (props) => {
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim().length > 2);

  const {
    enteredValue: enteredAddress,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    inputChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim().length > 2);

  const {
    enteredValue: enteredPostal,
    valueIsValid: postalIsValid,
    hasError: postalHasError,
    inputChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostal,
  } = useInput((value) => value.trim().length === 5);

  const {
    enteredValue: enteredPhone,
    valueIsValid: phoneIsValid,
    hasError: phoneHasError,
    inputChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput((value) => value.trim().length > 7);

  let formIsValid = false;
  if (nameIsValid && addressIsValid && postalIsValid && phoneIsValid) {
    formIsValid = true;
  }
  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      postalCode: enteredPostal,
      phone: enteredPhone,
    });

    resetName();
    resetAddress();
    resetPostal();
    resetPhone();
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${nameHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Entered name is too short!</p>}
      </div>
      <div
        className={`${styles.control} ${addressHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressHasError && <p>Entered address is too short!</p>}
      </div>
      <div
        className={`${styles.control} ${postalHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalHasError && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div
        className={`${styles.control} ${phoneHasError ? styles.invalid : ""}`}
      >
        <label htmlFor="phone">Phone number</label>
        <input
          type="text"
          id="phone"
          value={enteredPhone}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneHasError && (
          <p>Please enter a valid Phone number (atleast 8 characters long)!</p>
        )}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onBack}>
          Back
        </button>
        {/* <button type="button" onClick={props.onCancel}>
          Cancel
        </button> */}
        <button disabled={!formIsValid} className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
