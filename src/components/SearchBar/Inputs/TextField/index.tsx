import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.scss";

export const TextField = ({
  label,
  id,
  value,
  placeholder,
  handleChange,
  ...props
}: TextFieldProps) => {
  const inputElementType = (id: string) => {
    const idsForNumberInput = ["passengers", "guests", "rooms"];
    const idsForTextInput = ["from", "to", "destination"];
    const idsForDateInput = ["date1", "date2"];

    if (idsForNumberInput.includes(id)) {
      return "number";
    }

    if (idsForTextInput.includes(id)) {
      return "text";
    }

    if (idsForDateInput.includes(id)) {
      return "date";
    }
  };

  return (
    <div className={`${styles.inputContainer} ${styles.input}`}>
      {label && (
        <label
          htmlFor={label}
          className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        type={inputElementType(id)}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        min="1"
        max="10"></input>
    </div>
  );
};
