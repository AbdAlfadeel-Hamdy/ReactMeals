import styles from "./HeaderCartButton.module.css";
import modalContext from "../../store/modalContext";
import { useContext } from "react";
const HeaderCartButton = ({ totalItems }) => {
  const modalCtx = useContext(modalContext);

  return (
    <button
      className={`${styles.button} ${styles.bump}`}
      onClick={modalCtx.openModalHandler}
    >
      <div className={styles.icon}>
        <ion-icon name="cart"></ion-icon>
      </div>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
