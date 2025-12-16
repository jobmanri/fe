import { ReactNode } from "react";
import { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./badge.css";

type BadgeVariants = NonNullable<RecipeVariants<typeof styles.badge>>;

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariants["variant"];
  size?: BadgeVariants["size"];
}

export const Badge = ({ children, variant, size }: BadgeProps) => {
  return <span className={styles.badge({ variant, size })}>{children}</span>;
};
