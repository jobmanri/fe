import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "16px 0",
    },
  },
});

export const h2 = style({
  fontSize: "24px",
  fontWeight: 600,
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "4px 0",
    },
  },
});

export const span = style({
  color: "gray",
});

export const cardGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
  "@media": {
    "screen and (max-width: 768px)": {
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "0.5rem",
    },
  },
});
