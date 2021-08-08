import { style, styleVariants, composeStyles } from "@vanilla-extract/css";
import { theme } from "../theme.css";

const core = style({
  backgroundColor: "transparent",
  border: 0,
  cursor: "pointer",
});

export const variantVariants = styleVariants({
  primary: {
    backgroundColor: theme.color["blue-700"],
    color: theme.color.white,
    ":hover": {
      backgroundColor: theme.color["blue-800"],
    },
  },
  secondary: {
    color: theme.color["blue-700"],
    outline: "1px solid",
    outlineColor: theme.color["blue-700"],
    ":hover": {
      outline: 0,
      backgroundColor: theme.color["blue-700"],
      color: theme.color.white,
    },
  },
});

export const sizeVariants = styleVariants({
  small: {
    height: theme.space.x8,
    fontSize: "16px",
    paddingLeft: theme.space.x4,
    paddingRight: theme.space.x4,
  },
  large: {
    height: theme.space.x11,
    fontSize: "18px",
    paddingLeft: theme.space.x6,
    paddingRight: theme.space.x6,
  },
});

export const button = {
  primary: {
    small: composeStyles(core, variantVariants.primary, sizeVariants.small),
    large: composeStyles(core, variantVariants.primary, sizeVariants.large),
  },
  secondary: {
    small: composeStyles(core, variantVariants.secondary, sizeVariants.small),
    large: composeStyles(core, variantVariants.secondary, sizeVariants.large),
  },
};
