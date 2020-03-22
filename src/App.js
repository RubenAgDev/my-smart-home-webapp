import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';
import ErrorPage from './pages/Error/Error';

function App() {
  const [currentNavValue, setCurrentNavValue] = React.useState(0);
  // TODO: Setting token as env var until auth token is handle in the app state
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true);

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
        onChange={handleNavChange}
      />
      <main>
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
