import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFFFFF",
      200: "000000",
    },
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  fonts: {
    heading: "pixel",
    body: "system-ui, sans-serif",
  },
});
