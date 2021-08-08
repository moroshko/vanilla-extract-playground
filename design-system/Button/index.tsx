import { ReactNode } from "react";
import * as styles from "./styles.css";

type Props = {
  variant?: keyof typeof styles.variantVariants;
  size?: keyof typeof styles.sizeVariants;
  children: ReactNode;
};

export const Button = ({
  variant = "primary",
  size = "large",
  children,
}: Props) => (
  <button className={styles.button[variant][size]} type="button">
    {children}
  </button>
);
