import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import { useState } from "react";
const MealItemForm = ({ meal, onOrderMeal }) => {
  const [amount, setAmount] = useState(0);
  const onChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const orderMealHandler = (e) => {
    e.preventDefault();
    onOrderMeal({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: +amount,
    });
  };
  return (
    <form className={styles.form}>
      <Input
        title="Amout"
        type="number"
        value={amount}
        onChange={onChangeHandler}
      />
      <button onClick={orderMealHandler}>+Add</button>
    </form>
  );
};

export default MealItemForm;
