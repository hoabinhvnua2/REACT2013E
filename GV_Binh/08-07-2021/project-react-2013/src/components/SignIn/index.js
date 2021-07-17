import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUser } from '../../redux/hooks/User';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const schemaSignIn = yup.object().shape({
  userName: yup.string().required('This is required!'),
  password: yup.string().required('This is required!')
})

const SignIn = () => {
  const classes = useStyles();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schemaSignIn)
  })
  const [infoUser, setInfoUser] = useState({
    userName: '',
    password: ''
  })
  const { user, action } = useUser()
  const history = useHistory()

  console.log('list user', user.userList)
  console.log('infoUser', infoUser)

  useEffect(() => {
    if (user.userList.some(u => u.userName === infoUser.userName && u.password === infoUser.password)) {
      console.log('vao roi');
      localStorage.setItem('users', JSON.stringify(infoUser))
      history.push('/admin')
    }
  }, [user.userList, infoUser, history])

  const submit = (data) => {
    setInfoUser(() => data)
    action.getUsers()
  }
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(submit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User name"
            name="userName"
            {...register('userName')}
            autoComplete="email"
            autoFocus
            error={!!errors?.userName}
            helperText={errors?.userName?.message}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            {...register('password')}
            autoComplete="current-password"
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    );
};

export default SignIn;