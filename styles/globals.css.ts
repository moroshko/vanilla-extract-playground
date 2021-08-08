import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  fontFamily: "Helvetica Neue, sans-serif",
});

globalStyle("body", {
  padding: "40px",
});

globalStyle("*", {
  boxSizing: "border-box",
});
