import React from 'react';
import LoginForm from './components/LoginForm';

import NotionService from '../../services/Notion';

const initialState ={
  email: '',
  password: '',
  error: '',
};

function SignIn({onSignIn}) {
  const [formValues, setFormValues] = React.useState(initialState);

  const handleFormChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleOnError = (error) => {
    setFormValues({
      ...formValues,
      error,
    })
  }

  const handleFormSubmit = async () => {
    try {
      const success = await NotionService.signIn(formValues);
      
      if (success) {
        onSignIn(true);
      } else {
        handleOnError('Invalid email and/or password');
      }
    } catch (error) {
      handleOnError(error.message);
    }
  };

  return (
    <LoginForm
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      values={formValues} />
  );
}

export default SignIn;
