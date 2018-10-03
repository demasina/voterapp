import React from 'react';
import { Redirect } from 'react-router-dom';

import SignIn from './SignIn';
import ErrorMessage from '../../components/ErrorMessage';

const SignInPage = ({ authType, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <ErrorMessage />
      <SignIn authType={authType} />
    </div>
  );
};

export default SignInPage;