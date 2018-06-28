import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_cart';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem, IconButton } from 'material-ui';
import RemoveShoppingCart from 'material-ui/svg-icons/action/delete';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Cart extends React.PureComponent<Props, {}> { 
  handleClose = () => {
    const { hideModal } = this.props;
    hideModal();
  }

  handleDelete(item: any) {
    const { auth, deleteItem } = this.props;
    deleteItem(auth.user.uid, item);
  }

  render() {
    const { activeModal, cartItems } = this.props;
    return (
      <div className="Cart">
        <Dialog
          title="Your Shopping Cart"
          modal={false}
          open={activeModal === 'openCart' ? true : false}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {!cartItems.length && <h1>Your cart is empty!</h1>}
       <List>
            {cartItems && cartItems.map((item: any) => {
              return (
                <ListItem rightIconButton={<IconButton onClick={() => this.handleDelete(item)}><RemoveShoppingCart/></IconButton>}
                          disabled={false}
                          key={item.id}>
                          <p>id: {item.id}</p>
                  <h1>Name: {item.title}</h1>
                  <h2>Price: ${item.price}</h2>
                </ListItem>
              )
            })}
          </List>

          <RaisedButton
            type="submit"
            label="Place Order"
            primary={true}
            style={{ marginTop: '20px' }}
          />
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
            style={{ marginLeft: '40px', color: 'black' }}
          />
        </Dialog>
      </div>
    );
  }
}
