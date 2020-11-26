import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import App from './App';
import theme from './theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Suspense fallback="loading">
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </Suspense>
  </MuiThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
