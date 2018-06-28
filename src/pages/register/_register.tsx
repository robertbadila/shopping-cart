import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import Register from './Register';
import { reduxForm } from 'redux-form';
import { register } from '../../redux/auth/creators';

export interface OwnOptionalProps {
  handleSubmit: any;
}
export interface OwnProps extends Partial<OwnOptionalProps> { }
export interface StateProps {
  auth: any;
}
export interface DispatchProps {
  register: (user: any) => Function;
}

export interface OwnProps { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth
    };
  },
  {
    register,
  },
)(reduxForm({
  form: 'register',
})(Register));
