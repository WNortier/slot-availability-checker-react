import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutPaper: {
    color: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2F4858",
    opacity: 0.9,
    border: "1px solid black",
    padding: "1rem",
    width: "45%",
    fontWeight: "lighter",
  },
  avail: {
    color: "#229954",
  },
  unavail: {
    color: "#cb4335",
  },
}));

const About = () => {
  useEffect(() => {
    setLoading({ loading: true });
    setTimeout(() => {
      setLoading({ loading: false });
    }, 2000);
  }, []);

  const classes = useStyles();

  const [loading, setLoading] = useState({ loading: false });

  return (
    <Grid container>
      <Grid className={classes.root} lg={12} item>
        {loading.loading ? (
          <CircularProgress></CircularProgress>
        ) : (
          <Paper className={classes.aboutPaper}>
            <h1>
              Slot Availability Checker <i className="far fa-eye eyecolor"></i>
            </h1>
            <h3>
              Write a JavaScript function that takes: <br></br>
              <ul>
                <li>a time slot (int)</li>
                <li>a length of job (int)</li>
                <li>a date ('YYYY-MM-DD') &</li>
                <li>
                  an array of availability e.g. [9, 10, 11, 12, 13, 14, 17]
                </li>
              </ul>
              The function should return whether a slot is{" "}
              <span className={classes.avail}>AVAILABLE</span>,
              <span className={classes.unavail}> UNAVAILABLE</span> or FULL.
            </h3>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default About;
