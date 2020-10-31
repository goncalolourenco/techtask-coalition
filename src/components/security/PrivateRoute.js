import { Route, Redirect } from 'react-router-dom';
import { useAuthentication } from './AuthContext';

const getPrivateRouteRender = (Component, render, auth, redirectPath) => (props) => {
  if (auth.isLogged) {
    return Component ? <Component {...props} /> : render(props);
  }

  return <Redirect to={redirectPath} />;
};

export const PrivateRoute = ({ component: Component, render, redirectPath = '/login', ...rest }) => {
  const auth = useAuthentication();

  return <Route render={getPrivateRouteRender(Component, render, auth, redirectPath)} {...rest} />;
};
