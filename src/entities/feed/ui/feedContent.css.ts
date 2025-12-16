import { style } from "@vanilla-extract/css";

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const contentBody = style({
  fontSize: "16px",
  lineHeight: "1.6",
  margin: 0,
});

export const hashtagContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});
