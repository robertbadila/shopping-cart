import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers';

import Item from './Item';

export interface StateProps { 

}
export interface DispatchProps {

}

export interface OwnOptionalProps {
  title: any,
  description: any,
  price: any,
  stock: any
 }

export interface OwnProps extends Partial<OwnOptionalProps> { }

export default connect<StateProps, DispatchProps, OwnProps>(
  (state: ApplicationState) => {
    return {

    };
  },
  {

  },
)(Item);
