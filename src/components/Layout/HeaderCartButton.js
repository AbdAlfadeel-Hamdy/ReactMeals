import styles from "./HeaderCartButton.module.css";
import modalContext from "../../store/modalContext";
import { useContext } from "react";
const HeaderCartButton = ({ onOpenModal }) => {
  const modalCtx = useContext(modalContext);
  return (
    <button className={styles.button} onClick={modalCtx.openModalHandler}>
      <div className={styles.icon}>
        <ion-icon name="cart"></ion-icon>
      </div>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
