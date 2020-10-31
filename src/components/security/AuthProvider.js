import React, { useState } from 'react';
import { useMutation } from 'react-query';
import api from '../../api';
import { AuthContext } from './AuthContext';

const defaultAuthState = {
  isLogged: false,
  token: null,
  user: '',
};

const getInitialAuthState = () => {
  const user = localStorage.getItem('currentUser');
  const token = localStorage.getItem('id_token');

  return user && token
    ? {
        isLogged: true,
        token,
        user,
      }
    : defaultAuthState;
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(getInitialAuthState);

  const handleLoginSuccess = ({ token }, { username }) => {
    localStorage.setItem('id_token', token);
    localStorage.setItem('currentUser', username);
    setAuth({
      isLogged: true,
      token,
      user: username,
    });
  };

  const [login, { isLoading, error }] = useMutation(api.login, {
    onSuccess: handleLoginSuccess,
  });

  const logout = () => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('currentUser');
    setAuth(defaultAuthState);
  };

  const authState = {
    ...auth,
    isLoading,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
