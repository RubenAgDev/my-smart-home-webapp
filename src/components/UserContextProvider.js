import React from 'react';

import NotionService from '../services/Notion';

const initialState = {
  authToken: '',
  isLoggedIn: false,
  error: '',
  name: '',
  email: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'loginUser':
      return {
        authToken: action.payload.authToken,
        isLoggedIn: action.payload.authenticated,
        error: action.payload.error,
        ...action.payload.user,
      };
    case 'logoutUser':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const UserContext = React.createContext();

function UserContextProvider ({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSignIn = async(formValues) => {
    try {
      const payload = await NotionService.signIn(formValues);
      dispatch({
        type: 'loginUser',
        payload
      });
    } catch (error) {
      dispatch({
        type: 'loginUser',
        payload: {
          ...initialState,
          error: error.message
        }
      });
    }
  };

  const handleSignOut = async () => {
    const success = await NotionService.signOut();
    if(success) {
      dispatch({
        type: 'logoutUser'
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        handleSignIn,
        handleSignOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;

export {
  UserContextProvider,
  UserContextConsumer
};
