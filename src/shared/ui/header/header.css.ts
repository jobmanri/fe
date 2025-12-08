import { style } from "@vanilla-extract/css";
import { colors } from "@/shared/styles/colors.css";

export const HEADER_HEIGHT = "64px";

export const headerContainer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: HEADER_HEIGHT,
  backgroundColor: colors.white,
  borderBottom: `1px solid ${colors.border}`,
  zIndex: 1000,
  boxShadow: `0 1px 3px 0 ${colors.blackAlpha10}`,
});

export const headerWrapped = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 24px",
  gap: "24px",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 16px",
      gap: "12px",
    },
  },
});

export const logo = style({
  fontSize: "22px",
  fontWeight: "bold",
  color: colors.textPrimary,
  flexShrink: 0,
  margin: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "18px",
    },
  },
});

export const logoLink = style({
  textDecoration: "none",
  color: "inherit",
});

export const navSearchContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flex: 1,
  gap: "16px",
  minWidth: 0,
});

export const funcActions = style({
  display: "flex",
  gap: "12px",
  flexShrink: 0,
});

export const loginButton = style({
  padding: "8px 20px",
  fontSize: "14px",
  color: colors.white,
  backgroundColor: colors.primary,
  border: "none",
  borderRadius: "6px",
  fontWeight: "500",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: colors.primaryDark,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const menuButton = style({
  display: "none",
  background: "transparent",
  border: "none",
  padding: "4px",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
    },
  },
});
