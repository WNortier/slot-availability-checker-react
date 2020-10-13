import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const StyledDiv = styled.div`
  a: hover {
    color: #bdc0c3;
  }
`;

const useStyles = makeStyles((theme) => ({
  github: {
    color: "#f3f3f3",
  },
}));

function AccountMenu() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <StyledDiv>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            className={classes.github}
            href="https://github.com/wnortier"
          >
            <i className="fab fa-github"></i>
          </a>
        </IconButton>
      </StyledDiv>
    </React.Fragment>
  );
}

export default AccountMenu;
