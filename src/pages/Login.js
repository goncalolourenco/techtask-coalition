import React from 'react';
import { Container, Grid, Paper, Box, TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useAuthentication } from '../components/security';
import { useHistory } from 'react-router-dom';
import coalitionLogo from '../coalition-logo.png';

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm({
    username: '',
    password: '',
  });
  const history = useHistory();
  const { login, error, isLoading } = useAuthentication();

  const onSubmit = async (formValues) => {
    await login(formValues);
    history.push('/dashboard');
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        style={{
          height: '100vh',
        }}
      >
        <Grid component="form" item lg={6} onSubmit={handleSubmit(onSubmit)}>
          <Paper>
            <Box p={3}>
              <Box pb={2} textAlign="center">
                <img alt="coalition-logo" src={coalitionLogo} />
              </Box>
              <Box py={1}>
                <TextField
                  error={!!errors?.username}
                  id="user.email"
                  variant="outlined"
                  name="username"
                  label="Username"
                  fullWidth
                  inputRef={register({ required: 'This field is mandatory' })}
                  helperText={errors?.username?.message}
                />
              </Box>
              <Box py={1}>
                <TextField
                  error={!!errors?.password}
                  id="user.password"
                  variant="outlined"
                  name="password"
                  label="Password"
                  fullWidth
                  type="password"
                  inputRef={register({ required: 'This field is mandatory' })}
                  helperText={errors?.password?.message}
                />
              </Box>
              {error && (
                <Box py={1} color="red">
                  {error?.message}
                </Box>
              )}
              <Box pt={2}>
                <Button type="submit" variant="contained" color="primary" size="large" disabled={isLoading}>
                  login
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
