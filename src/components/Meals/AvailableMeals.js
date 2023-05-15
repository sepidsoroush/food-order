import styles from "../../styles/AvailableMeals.module.css";
import DUMMY_MEALS from "../../assets/dummy-meals";
import MealItem from "./MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  return (
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          const { id, name, description, price } = meal;
          return (
            <MealItem
              key={id}
              id={id}
              name={name}
              price={price}
              description={description}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
