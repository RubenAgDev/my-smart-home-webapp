import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/Nav';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';
import ErrorPage from './pages/Error/Error';

const useStyles = makeStyles(theme => ({
  main: {
    padding: "0 2em"
  },
}))

function App({history}) {
  const classes = useStyles();

  const [currentNavValue, setCurrentNavValue] = React.useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  const handleNavChange = (event, newValue) => {
    setCurrentNavValue(newValue);
  };

  const handleSignIn = (success) => {
    setIsUserLoggedIn(success);
  };

  const handleSignOut = () => {
    setIsUserLoggedIn(false);
  }

  const PrivateRoute = ({ children, path}) => {
    return (
        <Route path={path}>
          {isUserLoggedIn ? children : <Redirect to="/sign-in" />}
        </Route>
    );
  };

  return (
    <Router>
      <Nav
        value={currentNavValue}
        onChange={handleNavChange} />
      <main className={classes.main}>
        <Switch>
          <Route path="/sign-in">
            {isUserLoggedIn ? <Redirect to="/" /> : <SignIn onSignIn={handleSignIn}  />}
          </Route>
          <Route path="/sign-out">
            <SignOut onSignOut={handleSignOut} />
          </Route>
          <Route path="/error">
            <ErrorPage />
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
