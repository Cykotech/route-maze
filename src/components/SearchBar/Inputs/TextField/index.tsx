import { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.scss";

export const TextField = ({
  label,
  id,

  placeholder,
  ...props
}: TextFieldProps) => {
  const { value, handleChange } = props;
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
    <div className={`${styles.inputContainer} ${className}`} {...props}>
      {label && (
        <label htmlFor={label} className={styles.label} {...labelProps}>
          {label}
        </label>
      )}
      <input

        className={styles.input}
        type={inputElementType(id)}
        placeholder={placeholder}
        value={value}
        onKeyDown={() => {
          handleChange;
          console.log(value);
        }}
        min="1"
        max="10"></input>

    </div>
  );
};
