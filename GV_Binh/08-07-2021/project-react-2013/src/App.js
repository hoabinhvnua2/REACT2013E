// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
import LayoutTheme from './layout';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


// const style = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
//   customColor: {
//     color: 'red',
//   },
// })

function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
   {/* <Button variant="contained" color="primary" onClick={() =>  setOpen(true)}>
      Hello World
    </Button>

    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth='md' fullWidth="true">
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6" className={classes.customColor}>Form Đăng ký</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
    </MuiDialogTitle>
      <DialogContent>
        Xin chao cac b lop React 2013
      </DialogContent>
    </Dialog> */}
    {/* <LayoutTheme /> */}

    {/* <SignIn /> */}
    <SignUp />
    </div>
  );
}
export default App;
