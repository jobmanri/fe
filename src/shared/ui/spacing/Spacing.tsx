import * as styles from "./spacing.css";

interface SpacingProps {
  direction?: "vertical" | "horizontal";
  size?: number;
}

export const Spacing = ({ direction = "vertical", size = 16 }: SpacingProps) => {
  const style = direction === "vertical" ? { height: `${size}px` } : { width: `${size}px` };

  return <div className={styles.spacing({ direction })} style={style} />;
};
