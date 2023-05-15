import styles from "../../styles/Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${styles.backdrop} ${props.className}`}>
      <div className={styles.modal}>{props.children}</div>
    </div>
  );
};

export default Modal;
