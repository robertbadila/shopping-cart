import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';
import { hideModal } from '../../redux/ui/actions';
import { deleteItem } from '../../redux/cart/creator';

import Cart from './Cart';


export interface OwnOptionalProps {}
  
export interface OwnProps extends Partial<OwnOptionalProps> { }

export interface StateProps { 
  activeModal: string | null;
  cartItems: any;
  auth: any;
 }

export interface DispatchProps {
  hideModal: Function;
  deleteItem: Function;
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      activeModal: state.ui.activeModal,
      cartItems: state.cart.list,
      auth: state.auth
    };
  },
  {
    hideModal,
    deleteItem
  },
)(Cart);
