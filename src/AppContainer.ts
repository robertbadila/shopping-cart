import { connect } from 'react-redux';
import { ApplicationState } from './redux/reducers';
import App from './App';
import { calculateResponsiveState } from 'redux-responsive';

export interface StateProps { }

export interface DispatchProps {
  calculateResponsiveState: any;
}

export interface OwnProps { }

export default connect<{}, DispatchProps, {}>(
  (state: ApplicationState) => {
    return {};
  }, {
    calculateResponsiveState: (window: Window) => calculateResponsiveState(window),
  },
)(App);
