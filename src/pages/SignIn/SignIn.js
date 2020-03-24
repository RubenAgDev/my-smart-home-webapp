import React from 'react';
import LoginForm from './components/LoginForm';

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

  const handleError = (error) => {
    setFormValues({
      ...formValues,
      error,
    })
  }

  const handleFormSubmit = async () => {
    const { error } = await onSignIn(formValues);
    if(error !== '') {
      handleError(error);
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
