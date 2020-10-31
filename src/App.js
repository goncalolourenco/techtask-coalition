import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { PrivateRoute, AuthProvider } from './components/security';
import routes from './pages/routes';
import AppContainer from './components/AppContainer';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0074c1',
    },
    secondary: {
      main: '#5EBBEF',
    },
  },
});

const renderAppRoute = (route) => {
  return route.isPrivate ? (
    <PrivateRoute exact key={route.path} path={route.path} component={route.component} />
  ) : (
    <Route exact key={route.path} path={route.path} component={route.component} />
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <AppContainer>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
              {routes.map(renderAppRoute)}
            </Switch>
          </AppContainer>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
