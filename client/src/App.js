import React from 'react';
import { Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ApolloProvider } from '@apollo/react-hooks';

import './App.css';
import AppRouter from './AppRouter';
import { TopBar } from './components/layout/TopBar';
import { Menu } from './components/layout';
import { menuConf } from './menu';
import { client } from './apollo';
import { history } from './history';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins && theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing && theme.spacing(3),
  },
}));

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <CssBaseline />
        <TopBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <Menu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} items={menuConf} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AppRouter />
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
