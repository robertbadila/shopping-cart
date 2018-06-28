import registerServiceWorker from './registerServiceWorker';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import { Router, Route, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import App from './AppContainer';
import Dashboard from './pages/dashboard';
import Authentication from './Authentication';
import Login from './pages/login';
import Register from './pages/register';
import ResetPassword from './pages/resetPassword';

import Home from './pages/home';

injectTapEventPlugin();

export const routeList = {
  index: '/',
  login: '/login',
  register: '/register',
  resetPassword: '/resetPassword',
  authentication: '/authentication',
  dashboard: '/dashboard',
  overview: '/overview',
};

const router = (
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path={routeList.index} component={App}>
          <IndexRedirect to={routeList.authentication} />
          <Route path={routeList.login} component={Login} />
          <Route path={routeList.register} component={Register} />
          <Route path={routeList.resetPassword} component={ResetPassword} />
          <Route component={Authentication} path={routeList.authentication}>
            <Route component={Dashboard}>
              <IndexRedirect to={routeList.overview} />
              <Route path={routeList.overview} component={Home} />
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
registerServiceWorker();