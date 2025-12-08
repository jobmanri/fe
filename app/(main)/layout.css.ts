import { HEADER_HEIGHT } from "@/shared/ui/header/header.css";
import { style } from "@vanilla-extract/css";

export const bodyWithHeader = style({
  paddingTop: HEADER_HEIGHT,
  minHeight: "100vh",
});
