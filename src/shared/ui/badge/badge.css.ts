import { recipe } from "@vanilla-extract/recipes";

export const badge = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    borderRadius: "20px",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "#EEF2FF",
        color: "#2362F0",
      },
      secondary: {
        backgroundColor: "#F1F5F9",
        color: "#64748B",
      },
      success: {
        backgroundColor: "#DCFCE7",
        color: "#16A34A",
      },
      warning: {
        backgroundColor: "#FEF3C7",
        color: "#D97706",
      },
      danger: {
        backgroundColor: "#FEE2E2",
        color: "#DC2626",
      },
    },

    size: {
      small: {
        padding: "2px 6px",
        fontSize: "12px",
      },
      medium: {
        padding: "4px 8px",
        fontSize: "14px",
      },
      large: {
        padding: "6px 12px",
        fontSize: "16px",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
