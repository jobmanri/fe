import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "24px",
  border: "1px solid #E2E8F0",
  borderRadius: "16px",
  backgroundColor: "white",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.2s",
  maxWidth: "350px",
  width: "100%",
  ":hover": {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
});
