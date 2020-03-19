import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';

import './App.css';

function App() {
  const [currentNavValue, setCurrentNavValue] = React.useState(0);

  const handleNavChange = (event, newValue) => {
    setCurrentNavValue(newValue);
  };

  return (
    <Router>
      <main>
        <Nav
          value={currentNavValue}
          onChange={handleNavChange} />
        <Switch>
          <Route path="/sign-in">
            <SignIn />
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
