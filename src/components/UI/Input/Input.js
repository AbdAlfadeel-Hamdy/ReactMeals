import styles from "./Input.module.css";
const Input = ({ title, type }) => {
  return (
    <div className={styles.input}>
      <label>{title}</label>
      <input type={type} />
    </div>
  );
};

export default Input;
