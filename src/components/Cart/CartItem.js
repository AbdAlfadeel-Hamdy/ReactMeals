import styles from "./CartItem.module.css";
const CartItem = () => {
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>Sushi</h2>
        <div className={styles.summary}>
          <div className={styles.price}>20</div>
          <div className={styles.amount}>20</div>
        </div>
      </div>
      <div className={styles.action}>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItem;
