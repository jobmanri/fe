import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/styles/colors.css";

export const searchSection = style({
  position: "relative",
  flex: 1,
  maxWidth: "600px",
  minWidth: "200px",
  "@media": {
    "screen and (max-width: 768px)": {
      maxWidth: "none",
      minWidth: "150px",
    },
  },
});

export const searchInput = style({
  width: "100%",
  height: "40px",
  padding: "0 16px",
  fontSize: "14px",
  border: `1px solid ${colors.borderHover}`,
  borderRadius: "20px",
  outline: "none",
  transition: "border-color 0.2s",
  ":focus": {
    borderColor: colors.primary,
  },
  "::placeholder": {
    color: colors.textTertiary,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      height: "36px",
      fontSize: "13px",
      padding: "0 12px",
    },
  },
});
