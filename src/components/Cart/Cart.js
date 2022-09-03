import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import modalContext from "../../store/modalContext";
import { useContext } from "react";
const Cart = ({ orderedMeals, total, onOrderChange }) => {
  const modalCtx = useContext(modalContext);
  const cartItems = orderedMeals.map((meal) => {
    return <CartItem key={meal.id} meal={meal} onOrderChange={onOrderChange} />;
  });
  return (
    <div className={styles["cart-items"]} onClick={(e) => e.stopPropagation()}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={modalCtx.closeModalHandler}
        >
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
