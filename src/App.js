import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';

const useStyles = makeStyles(theme => ({
  main: {
    padding: "0 2em"
  },
}))

function App() {
  const classes = useStyles();

  const [currentNavValue, setCurrentNavValue] = React.useState(0);

  const handleNavChange = (event, newValue) => {
    setCurrentNavValue(newValue);
  };

  return (
    <Router>
      <Nav
        value={currentNavValue}
        onChange={handleNavChange} />
      <main className={classes.main}>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-out">
            <SignOut />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
