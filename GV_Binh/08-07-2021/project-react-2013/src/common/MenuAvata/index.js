import React, { useRef, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core";
import style from './style';

const MenuAvata = ({ classes }) => {
  const anchorRef = useRef(null);
  const [openPoper, setOpenPoper] = useState(false);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenPoper(false);
  };
  return (
    <>
      <Avatar
        onClick={() => setOpenPoper(true)}
        alt="Cindy Baker"
        src="https://material-ui.com/static/images/avatar/4.jpg"
        ref={anchorRef}
        aria-controls={openPoper ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        className={classes.customAvata}
      />
      <Popper
        open={openPoper}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow">
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default withStyles(style)(MenuAvata);
