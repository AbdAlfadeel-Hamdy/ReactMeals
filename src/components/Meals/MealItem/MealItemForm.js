import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input title="Amout" type="number" />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
