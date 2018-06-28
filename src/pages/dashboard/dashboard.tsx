import { connect } from 'react-redux';
import * as React from 'react';
import { ApplicationState } from '../../redux/reducers';
import { loadItems } from '../../redux/items/creators';
import { getItemsInCart } from '../../redux/cart/creator';

// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
// const logo = require('../../assets/logo.svg');

interface StateProps {
  auth: any;
}
interface DispatchProps {
  loadItems: Function;
  getItemsInCart: Function;
}
interface OwnOptionalProps {}
interface OwnProps extends Partial<OwnOptionalProps> { }

type Props = StateProps & DispatchProps & OwnProps;

class Dashboard extends React.Component<Props, {}> {
  componentWillMount(){
    const { loadItems, getItemsInCart, auth } = this.props;
    loadItems();
    getItemsInCart(auth.user.uid);
  }

  render() {
    const { 
      children, 
      // auth
    } = this.props;
    return (
      <section className="Dashboard">
        <section className="App-Content">
          {children}
        </section>
      </section>
    );
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {
      auth: state.auth,
    };
  },
  {
    loadItems,
    getItemsInCart
  },
)(Dashboard);
