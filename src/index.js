import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'common/theme';
import GlobalStyle from 'common/GlobalStyle';

import App from './App';
import createStore, { history } from './store';

const store = createStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <GlobalStyle />
          <Router>
            <App />
          </Router>
        </>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
