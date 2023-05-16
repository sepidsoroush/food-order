import React, { forwardRef } from "react";
import styles from "../../styles/Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.id}>Amount</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
