import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const cardHeader = style({
  display: "inline-flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
});

export const tagText = style({
  color: "#64748B",
  fontSize: "14px",
});

export const cardTitle = style({
  fontSize: "24px",
  fontWeight: 600,
  margin: "4px 0",
});

export const cardMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  fontSize: "14px",
  color: "#94A3B8",
});
