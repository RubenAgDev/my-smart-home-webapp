import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

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

function Nav({value, onChange}) {
  return (
    <AppBar position="static">
      <Tabs value={value} onChange={onChange} aria-label="navigation tabs">
        <LinkTab label="Home" to="/" {...a11yProps(0)} />
        <LinkTab label="Sign Out" to="/sign-out" {...a11yProps(1)} />
      </Tabs>
    </AppBar>
  );
}

export default Nav;
