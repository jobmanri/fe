import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/styles/colors.css";

export const nav = style({
  flexShrink: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const navMenu = style({
  display: "flex",
  listStyle: "none",
  gap: "1.25rem",
  margin: 0,
  padding: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "1rem",
    },
    "screen and (max-width: 480px)": {
      gap: "0.75rem",
    },
  },
});

export const active = style({
  position: "relative",
  "::after": {
    content: "",
    position: "absolute",
    bottom: "-5px",
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: colors.primary,
  },
});

export const navLink = style({
  fontSize: "15px",
  color: colors.textPrimary,
  textDecoration: "none",
  fontWeight: "500",
  cursor: "pointer",
  ":hover": {
    color: colors.textSecondary,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "16px",
    },
  },
});
