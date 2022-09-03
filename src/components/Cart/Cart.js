import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import modalContext from "../../store/modalContext";
import cartContext from "../../store/cartContext";
import { useContext } from "react";
const Cart = () => {
  const modalCtx = useContext(modalContext);
  const cartCtx = useContext(cartContext);
  const cartItems = cartCtx.orderedMeals.map((meal) => {
    return <CartItem key={meal.id} meal={meal} />;
  });
  const total = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cartCtx.total);
  return (
    <div className={styles["cart-items"]} onClick={(e) => e.stopPropagation()}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={modalCtx.closeModalHandler}
        >
          Close
        </button>
        {cartCtx.total ? (
          <button className={styles.button}>Order</button>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
