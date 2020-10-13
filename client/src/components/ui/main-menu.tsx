import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainMenu: {
    marginTop: "3.25rem",
  },
  menuIcon: {
    marginRight: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "black",
    margin: "0.25rem",
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorElMainIcon, setAnchorElMainIcon] = React.useState(null);

  const handleMainMenuOpen = (event: any) => {
    setAnchorElMainIcon(event.currentTarget);
  };

  const handleMainMenuClose = (event: any) => {
    setAnchorElMainIcon(null);
  };

  const handleGithub = () => {};

  return (
    <React.Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMainMenuOpen}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorElMainIcon}
        keepMounted
        open={Boolean(anchorElMainIcon)}
        onClose={handleMainMenuClose}
        className={classes.mainMenu}
      >
        <MenuItem onClick={handleGithub}>
          <Link className={classes.link} to="/" onClick={handleMainMenuClose}>
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleGithub}>
          <Link
            className={classes.link}
            to="/about"
            onClick={handleMainMenuClose}
          >
            About
          </Link>
        </MenuItem>
        <MenuItem onClick={handleGithub}>
          <a
            onClick={handleMainMenuClose}
            className={classes.link}
            target="_blank"
            href="https://github.com/wnortier"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
