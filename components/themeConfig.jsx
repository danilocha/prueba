import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003049",
      contrastText: "#eae2b7",
    },
    secondary: {
      main: "#f77f00",
    },
  },
});
export default theme;
