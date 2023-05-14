import styles from "../../styles/Header.module.css";
import meals from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <div className={styles.header}></div>
      <div className={styles.mainImg}>
        <img src={meals} alt="meals" />
      </div>
    </>
  );
};

export default Header;
