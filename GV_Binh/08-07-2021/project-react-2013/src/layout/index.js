import { withStyles } from "@material-ui/core";
import React, { useState } from "react";
import style from "./style";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "../pages/Product";
import User from "../pages/User";
import MenuAvata from '../common/MenuAvata';

const LayoutTheme = ({ classes }) => {
  const [open, setOpen] = useState(true);


  const handleDrawerOpen = () => {
    setOpen((s) => !s);
  };

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.customHead}>
              <Typography variant="h6" noWrap className={classes.customLine}>
                Persistent drawer
              </Typography>

                <MenuAvata />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {/* <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div> */}
          <Divider />
          <List>
            <Link to="/product">
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Product" />
              </ListItem>
            </Link>
            <Link to="/user">
              <ListItem button>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/product" component={Product} />
            <Route exact path="/user" component={User} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default withStyles(style)(LayoutTheme);
