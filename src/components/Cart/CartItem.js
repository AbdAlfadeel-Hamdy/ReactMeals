import styles from "./CartItem.module.css";
const CartItem = ({ meal, onOrderChange }) => {
  const decrementOrder = () => {
    onOrderChange(-1, meal.name);
  };
  const incrementOrder = () => {
    onOrderChange(1, meal.name);
  };
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{meal.name}</h2>
        <div className={styles.summary}>
          <div className={styles.price}>${meal.price}</div>
          <div className={styles.amount}>{`x${meal.amount}`}</div>
        </div>
      </div>
      <div className={styles.action}>
        <button onClick={decrementOrder}>-</button>
        <button onClick={incrementOrder}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
