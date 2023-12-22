import { ButtonProps } from "../Button.types";
import styles from "./button.module.scss";

export const Button = ({
  children,
  buttonType = "primary",

  handleClick,
}: ButtonProps) => {
  return (
    <button className={styles[`button--${buttonType}`]} onClick={handleClick}>{children}</button>

  );
};
