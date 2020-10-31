import React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useAuthentication } from '../security';
import { useStyles } from './index.styles';

const AppContainer = ({ children }) => {
  const classes = useStyles();
  const { isLogged, logout } = useAuthentication();
  const history = useHistory();

  const redirectToLogin = () => {
    history.push('/login');
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.appToolbar}>
          <Typography variant="h6">Coalition dataleaks</Typography>
          {isLogged ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={redirectToLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default AppContainer;
