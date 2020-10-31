import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuthentication = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('please use this function inside an AuthProvider');
  }

  return context;
};
