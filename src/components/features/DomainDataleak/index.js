import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { FixedSizeList } from 'react-window';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from '../../../api';
import { useStyles } from './index.styles';
import useSearch from '../../hooks/useSearch';

const DomainDataLeakItem = ({ name, emails, initialOpen = false }) => {
  const [open, setOpen] = useState(initialOpen);
  const classes = useStyles();

  const toggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const renderRow = ({ index, style }) => {
    return (
      <ListItem style={style} key={index}>
        <ListItemText primary={emails[index]?.email} />
      </ListItem>
    );
  };

  return (
    <>
      <ListItem button onClick={toggle}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse className={classes.collapseContent} in={open} timeout="auto" unmountOnExit>
        <FixedSizeList height={200} itemSize={40} itemCount={emails.length}>
          {renderRow}
        </FixedSizeList>
      </Collapse>
    </>
  );
};

const searchDefaultValues = {
  searchInputValue: 'example.com',
  searchTerm: 'example.com',
};

const DomainDataLeak = () => {
  const classes = useStyles();
  const { searchInputValue, searchTerm, handleInputSearch, handleSearch } = useSearch(searchDefaultValues);
  const { data, isLoading } = useQuery(['dataDomainLeaks', searchTerm], api.getDomainDataLeak, { enabled: searchTerm });

  return (
    <>
      <Container maxWidth="lg">
        <Grid container alignContent="center" alignItems="center" justify="center">
          <Grid item xs={9}>
            <Paper>
              <Typography className={classes.title} variant="h4" color="primary">
                Dataleaks by domain
              </Typography>
              <Box px={3} pb={3}>
                <Grid container alignItems="stretch" justify="flex-end">
                  <TextField
                    id="search.domain"
                    variant="outlined"
                    label="Domain"
                    onChange={handleInputSearch}
                    value={searchInputValue}
                    size="small"
                  />
                  <Button
                    data-testid="search.domain"
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
                    {data &&
                      data.map((itemLeak) => (
                        <DomainDataLeakItem key={itemLeak.name} name={itemLeak.name} emails={itemLeak.emails} />
                      ))}
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

export default DomainDataLeak;
