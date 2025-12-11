import { style } from "@vanilla-extract/css";

export const cardList = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  listStyle: "none",
  padding: 0,
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});

export const cardItem = style({
  display: "flex",
});
