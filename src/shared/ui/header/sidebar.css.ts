import { colors } from "@/shared/styles/colors.css";

import { style } from "@vanilla-extract/css";

const transitionTiming = "cubic-bezier(0.32, 0.725, 0, 1)";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.blackAlpha50,
  zIndex: 1100,
  opacity: 0,
  pointerEvents: "none",
  willChange: "opacity",
  transition: `opacity 0.4s ${transitionTiming}`,
});

export const overlayOpen = style({
  opacity: 1,
  pointerEvents: "auto",
});

export const sidebar = style({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  width: "280px",
  maxWidth: "80vw",
  backgroundColor: colors.white,
  zIndex: 1200,
  boxShadow: `-2px 0 8px ${colors.blackAlpha10}`,
  display: "flex",
  flexDirection: "column",
  transform: "translateX(100%)",
  willChange: "transform",
  transition: `transform 0.5s ${transitionTiming}`,
});

export const sidebarOpen = style({
  transform: "translateX(0)",
});

export const sidebarHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
});

export const closeButton = style({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const sidebarNav = style({
  flex: 1,
  overflowY: "auto",
  padding: "16px 0",
});

export const sidebarMenu = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const sidebarLink = style({
  display: "block",
  padding: "14px 20px",
  fontSize: "16px",
  color: colors.gray600,
  textDecoration: "none",
  fontWeight: "500",
  transition: "background-color 0.2s, color 0.2s",
  ":hover": {
    backgroundColor: colors.gray50,
    color: colors.gray800,
  },
});

export const sidebarLinkActive = style({
  color: colors.primary,
  backgroundColor: colors.primaryLight,
  fontWeight: "600",
});

export const sidebarActions = style({
  padding: "0.75rem",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px",
});

export const sidebarLoginButton = style({
  padding: "10px 16px",
  fontSize: "14px",
  color: colors.gray600,
  backgroundColor: colors.gray100,
  textDecoration: "none",
  textAlign: "center",
  borderRadius: "6px",
  fontWeight: "500",
});

export const sidebarSignupButton = style({
  padding: "10px 16px",
  fontSize: "14px",
  color: colors.white,
  backgroundColor: colors.primary,
  textDecoration: "none",
  textAlign: "center",
  borderRadius: "6px",
  fontWeight: "500",
});
