import styles from "./HeaderCartButton.module.css";
import modalContext from "../../store/modalContext";
import { useContext } from "react";
import cartContext from "../../store/cartContext";
const HeaderCartButton = () => {
  const modalCtx = useContext(modalContext);
  const cartCtx = useContext(cartContext);

  return (
    <button
      className={`${styles.button} ${styles.bump}`}
      onClick={modalCtx.openModalHandler}
    >
      <span className={styles.icon}>
        <ion-icon name="cart"></ion-icon>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartCtx.totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
