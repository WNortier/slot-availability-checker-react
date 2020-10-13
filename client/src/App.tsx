import React from "react";
import NavBar from "./components/ui/navbar";
import _styles from "./styles/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Slottable from "./components/slot-table/slot-table";
import About from "./components/about/about";

const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "rgb(47,72,88)",
      background:
        "linear-gradient(0deg, rgba(47,72,88,1) 0%, rgba(214,214,214,1) 100%)",
    },
  }));
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid
          container
          style={_styles.LayoutStyles.appHeight}
          className={classes.root}
        >
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={Slottable}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/about" component={About}></Route>
            <a
              rel="noopener noreferrer"
              href="https://github.com/wnortier"
              target="_blank"
            >
              Github
            </a>
          </Switch>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
