import { style } from "@vanilla-extract/css";

const colors = {
  black: "#191f28",
  gray500: "#8b95a1",
};

export const searchForm = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f0f4ff",
  borderRadius: "16px",
  padding: "16px 24px",
  marginBottom: "32px",
  border: "1px solid transparent",
  transition: "border-color 0.2s ease",
  ":focus-within": {
    borderColor: "#3182f6",
  },
});

export const searchIcon = style({
  width: "20px",
  height: "20px",
  color: colors.gray500,
  marginRight: "12px",
});

export const searchInput = style({
  flex: 1,
  border: "none",
  background: "transparent",
  fontSize: "16px",
  outline: "none",
  color: colors.black,
  "::placeholder": {
    color: colors.gray500,
  },
});
