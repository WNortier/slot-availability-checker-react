import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import MainMenu from "./main-menu";
import AccountMenu from "./account-menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#f3f3f3",
    textDecoration: "none",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  interface Props {
    children: React.ReactElement;
  }

  const ElevationScroll = (props: Props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  return (
    <ElevationScroll>
      <AppBar color="primary">
        <Toolbar>
          <MainMenu></MainMenu>
          <Typography variant="h5" className={classes.title}>
            <Link className={classes.link} to="/">
              <i className="far fa-eye eyecolor"></i> Slot Availability Checker
            </Link>
          </Typography>
          <AccountMenu></AccountMenu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
