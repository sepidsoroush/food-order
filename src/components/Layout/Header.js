import styles from "../../styles/Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.mainImg}>
        <img src={meals} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
