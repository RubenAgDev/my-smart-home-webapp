import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, path, isLoggedIn}) {
  return (
    <Route path={path}>
      { isLoggedIn ? children : <Redirect to="/sign-in" />}
    </Route>
  );
};

export default PrivateRoute;
