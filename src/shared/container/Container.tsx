import { type ReactNode } from "react";

import * as styles from "./container.css";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <section className={styles.container}>{children}</section>;
};
