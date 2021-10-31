import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

import NetworkStatus from './NetworkStatus';

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: '48px',
  },
  loginInfo: {
    position: 'absolute',
    right: '0',
    padding: '0.25em'
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

function Nav({value, onChange, loginInfo}) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Tabs value={value} onChange={onChange} aria-label="navigation tabs">
          <LinkTab label="Home" to="/" {...a11yProps(0)} />
          <LinkTab label="Sign Out" to="/sign-out" {...a11yProps(1)} />
        </Tabs>
        <Typography variant="body2" className={classes.loginInfo}>
          {loginInfo || <LinkTab to="/sign-in" label="Sign In" /> }
          <NetworkStatus />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
