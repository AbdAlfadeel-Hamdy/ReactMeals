import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ meal, onOrderMeal }) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{meal.price}</div>
      </div>
      <MealItemForm meal={meal} onOrderMeal={onOrderMeal} />
    </li>
  );
};

export default MealItem;
