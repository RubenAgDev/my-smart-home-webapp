import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: '50%',
    '& > *': {
      margin: theme.spacing(10),
    },
    '& div': {
      width: '300px',
    },
    '& input[type=\'text\']': {
      width: '20em'
    },
    '& button': {
      float: 'right',
      margin: '1em 0 0 1em'
    }
  },
}));

function LoginForm({values, onChange, onSubmit}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form autoComplete="off">
        <div>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={onChange}
            helperText="We will never share your email" />
        </div>
        <div>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={onChange}
        />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={onSubmit}>Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
