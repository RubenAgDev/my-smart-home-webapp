import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    width: '50%',
    '& > *': {
      margin: '10px',
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
  const hasError = !!values.error;

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
            helperText={hasError ? "" : "We will never share your email"}
            error={hasError} />
        </div>
        <div>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={values.password}
            onChange={onChange}
            error={hasError}
            helperText={hasError ? values.error : ""}
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
