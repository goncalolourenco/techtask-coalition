import React from 'react';
import { useQuery } from 'react-query';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from '../../../api';
import useSearch from '../../hooks/useSearch';
import { useStyles } from './index.styles';

const searchDefaultValues = {
  searchInputValue: 'example1@example.com',
  searchTerm: 'example1@example.com',
};

const EmailDataLeak = () => {
  const classes = useStyles();
  const { searchInputValue, searchTerm, handleInputSearch, handleSearch } = useSearch(searchDefaultValues);
  const { data, isLoading } = useQuery(['dataLeaks', searchTerm], api.getMailDataLeaks, { enabled: searchTerm });

  return (
    <>
      <Container maxWidth="lg">
        <Grid container alignContent="center" alignItems="center" justify="center">
          <Grid item xs={9}>
            <Paper>
              <Typography className={classes.title} variant="h4" color="primary">
                Dataleaks by user
              </Typography>
              <Box px={3} pb={3}>
                <Grid container alignItems="stretch" justify="flex-end">
                  <TextField
                    id="search.email"
                    variant="outlined"
                    label="Email"
                    onChange={handleInputSearch}
                    value={searchInputValue}
                    size="small"
                  />
                  <Button
                    data-testid="search.email"
                    className={classes.searchButton}
                    variant="contained"
                    color="primary"
                    size="medium"
                    disabled={isLoading}
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Grid>

                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <List>
                    {data && data.map((itemLeak) => <ListItem key={itemLeak.name}>{itemLeak.name}</ListItem>)}
                  </List>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EmailDataLeak;
