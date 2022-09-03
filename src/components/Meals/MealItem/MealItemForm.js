import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
import { useState } from "react";
const MealItemForm = ({ meal, onOrderMeal }) => {
  const [amount, setAmount] = useState(1);
  const inputChangeHandler = (e) => {
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
        inputConfig={{
          id: meal.id,
          label: "Amount",
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
          value: amount,
          onChange: inputChangeHandler,
        }}
      />
      <button onClick={orderMealHandler}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
