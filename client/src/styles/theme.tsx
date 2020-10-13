import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: string; // optional
  }
}
const primary = "#2F4858";
const secondary = "#1C6E7D";
const palette = {
  common: {},
  primary: { main: `${primary}` },
  secondary: { main: `${secondary}` },
  typography: { fontFamily: "Sans Serif" },
};
const themeName = "San Marino Razzmatazz Sugar Gliders";

export default createMuiTheme({ palette, themeName });
