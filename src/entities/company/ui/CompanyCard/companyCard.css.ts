import { style } from "@vanilla-extract/css";

const colors = {
  white: "#ffffff",
  black: "#191f28",
  blue100: "#dce4f0",
};

export const cardLink = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  padding: "24px",
  backgroundColor: colors.white,
  border: `1px solid ${colors.blue100}`,
  borderRadius: "16px",
  textDecoration: "none",
  color: colors.black,
  position: "relative",
  ":hover": {
    backgroundColor: "#f9fafb",
  },
});

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "8px",
});

export const companyNameKr = style({
  fontSize: "18px",
  fontWeight: 700,
  marginBottom: "4px",
});

export const companyNameEn = style({
  fontSize: "16px",
  color: "#333",
  fontWeight: 400,
});
