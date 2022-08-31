import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import modalContext from "../../store/modalContext";
import { useContext } from "react";
const Cart = ({ onCloseModal }) => {
  const modalCtx = useContext(modalContext);
  return (
    <div className={styles["cart-items"]} onClick={(e) => e.stopPropagation()}>
      <CartItem />
      <div className={styles.total}>
        <h3>Total Amount</h3>
        <div>2000</div>
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
