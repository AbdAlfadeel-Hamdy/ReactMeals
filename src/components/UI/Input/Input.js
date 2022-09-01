import styles from "./Input.module.css";
const Input = ({ title, type, value, onChange }) => {
  return (
    <div className={styles.input}>
      <label>{title}</label>
      <input value={value} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;
