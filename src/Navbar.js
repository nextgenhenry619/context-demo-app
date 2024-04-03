import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";

import bender from "./images/bender_icon.png";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/ThemeContext";

const content ={
  english: {
    search:"Search...",
    application:"App"
  },
  french: {
    search:"Chercher...",
    application:"l'appli"
  },
  spanish: {
    search:"Buscar...",
    application:"Aplicación"
  }
}

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;

    const {language} = this.props.languageContext;
    console.log(language)
    const {search,application} = content[language]

    const { classes } = this.props;
    console.log("class props:", classes);
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <img src={bender} alt="Bender" />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              {application}
            </Typography>
            <Switch name="NavSwitch" onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                name="Search"
                placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
