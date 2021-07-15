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
import PrivateRoute  from './common/PrivateRoute';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from './helper/history';


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
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/admin" component={LayoutTheme} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>

    {/* <SignIn /> */}
    {/* <SignUp /> */}
    </div>
  );
}
export default App;
