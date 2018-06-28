import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import { logoutUser } from '../../redux/actions';
import { addItem } from '../../redux/items/creators';
import { showModal } from '../../redux/ui/actions';
import { addItemsToCart } from '../../redux/cart/creator';
import Home from './Home';
import { reduxForm } from 'redux-form';
import { resetForm }  from '../../redux/ui/creators';

export interface StateProps {
  auth: any;
  items: any;
  activeModal: string | null;
  cart: any;
}
export interface DispatchProps {
  logoutUser: () => Function;
  addItem: Function;
  showModal: Function;
  resetForm: Function;
  addItemsToCart: Function;
}

export interface OwnOptionalProps {
  handleSubmit: any;
 }

export interface OwnProps extends Partial<OwnOptionalProps> { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      items: state.items.list,
      activeModal: state.ui.activeModal,
      auth: state.auth,
      cart: state.cart.list
    };
  },
  {
    logoutUser,
    addItem,
    showModal,
    resetForm,
    addItemsToCart
  },
)(reduxForm({
  form: 'addItem',
})(Home));
