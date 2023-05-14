import styles from "../styles/AvailableMeals.module.css";
import DUMMY_MEALS from "../data/dummy-meals";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  return (
    <div className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          const { id, name, description, price } = meal;
          return (
            <MealItem
              key={id}
              name={name}
              price={price}
              description={description}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableMeals;
