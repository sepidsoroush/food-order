import styles from "../../styles/Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        min={props.min}
        max={props.max}
        step={props.step}
      />
    </div>
  );
};

export default Input;
