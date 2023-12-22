import { ButtonProps } from "../Button.types";
import styles from "./TabButton.module.scss";

export const TabButton = ({ children, active, handleClick }: ButtonProps) => {
  return (
    <button
      className={active ? styles.activeTab : styles.inactiveTab}
      onClick={handleClick}>
      {children}
    </button>
  );
};
