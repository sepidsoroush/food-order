import styles from "../../styles/Input.module.css";

const Input = (props) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.id}>Amount</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
