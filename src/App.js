import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import { UserContextProvider, UserContextConsumer } from './components/UserContextProvider';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignOut from './pages/SignOut/SignOut';
import ErrorPage from './pages/Error/Error';

function App() {
  const [currentNavValue, setCurrentNavValue] = React.useState(0);

  const handleNavChange = (event, newValue) => {
    setCurrentNavValue(newValue);
  };

  return (
    <UserContextProvider>
      <UserContextConsumer>
        {userContext => (
          <Router>
            <Nav
              value={currentNavValue}
              onChange={handleNavChange}
              loginInfo={userContext.isLoggedIn && `${userContext.name} (${userContext.email})`}
            />
            <main>
              <Switch>
                <Route path="/sign-in">
                  {userContext.isLoggedIn ? <Redirect to="/" /> : <SignIn onSignIn={userContext.handleSignIn} />}
                </Route>
                <Route path="/sign-out">
                  {<SignOut onSignOut={userContext.handleSignOut} />}
                </Route>
                <Route path="/error">
                  <ErrorPage />
                </Route>
                <PrivateRoute path="/" isLoggedIn={userContext.isLoggedIn}>
                  <Home />
                </PrivateRoute>
              </Switch>
            </main>
          </Router>
        )}
      </UserContextConsumer>
    </UserContextProvider>
  );
}

export default App;
