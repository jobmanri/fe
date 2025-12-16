import { style, keyframes } from "@vanilla-extract/css";

const heartBeat = keyframes({
  "0%": { transform: "scale(1)" },
  "25%": { transform: "scale(1.2)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" },
});

export const footerContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingTop: "16px",
});

export const statsContainer = style({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const likeContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "0",
  border: "none",
  backgroundColor: "transparent",
  fontSize: "14px",
  color: "#64748B",
});

export const likeButton = style({
  cursor: "pointer",
});

export const commentCount = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "14px",
  color: "#64748B",
});

export const messageContainer = style({
  display: "flex",
});

export const messageButton = style({
  padding: "10px 16px",
  backgroundColor: "#F1F5F9",
  color: "#64748B",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#E2E8F0",
  },
});

export const heartIcon = style({
  transition: "all 0.3s ease",
  cursor: "pointer",
});

export const heartIconLiked = style({
  animation: `${heartBeat} 0.4s ease`,
});
