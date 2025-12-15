import { recipe } from "@vanilla-extract/recipes";

export const spacing = recipe({
  base: {
    flexShrink: 0,
  },

  variants: {
    direction: {
      vertical: {
        width: "100%",
      },
      horizontal: {
        height: "100%",
      },
    },
  },

  defaultVariants: {
    direction: "vertical",
  },
});
