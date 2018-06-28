import * as React from 'react';
import { StateProps, DispatchProps, OwnProps } from './_home';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui'; 
import { List, ListItem } from 'material-ui/List';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';


import Item from '../../components/Item/Item';
import Cart from '../../components/Modal';
import { IconButton } from 'material-ui';

export type Props = StateProps & OwnProps & DispatchProps;

export default class Home extends React.PureComponent<Props, {}> { 
  logout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  submitForm = (v: any) => {
    const { addItem, resetForm } = this.props;
    const item = {
      title: v.title,
      description: v.description,
      stock: v.stock,
      price: v.price
    }

    addItem(item);
    resetForm('addItem');
  }

  handleCart() {
    const { showModal } = this.props;
    showModal('openCart');
  }

  handleAddItemToCart(item: any) {
   const { addItemsToCart, auth } = this.props;
   addItemsToCart(item, auth.user.uid);
  }

  render() {

    const buttonStyle = {
      margin: '10px',
    };

    const inCart = this.props.cart.length;
    const rightButtons = (
      <div className="bar-buttons">
        <RaisedButton label={`Cart(${inCart})`} style={buttonStyle} onClick={() => this.handleCart()}/>
        <RaisedButton  onClick={this.logout} label="Logout" style={buttonStyle}></RaisedButton>
      </div>
    );

    const { handleSubmit, items } = this.props;
    const required = (value:any) => (value ? undefined : 'please check the value!');
    const number =(value: any) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

    return (
     <div className="Home">
      <AppBar
        className="app-bar"
        title="Home Page" 
        iconElementRight={rightButtons}
        iconElementLeft={<span></span>}
      />  

      <Cart />

       <form onSubmit={handleSubmit(this.submitForm)}>
        <div className="input-wrap2">
          <Field
            validate = {required}
            component={TextField}
            floatingLabelFixed={true}
            floatingLabelText={'Title'}
            fullWidth={true}
            name="title"
            className="input-wrapper input"
            style={{ marginTop: '20px', width: '100%' }}
          />
        </div>
        <div className="input-wrap2">
          <Field
            validate = {required}
            component={TextField}
            floatingLabelFixed={true}
            floatingLabelText={'Description'}
            fullWidth={true}
            name="description"
            className="input-wrapper input"
            style={{ marginTop: '20px', width: '100%' }}
          />
        </div>
        <div className="grid">
        <div className="input-wrap1  same-line">
        <Field
            validate = {[required, number]}
            component={TextField}
            floatingLabelFixed={true}
            floatingLabelText={'Price'}
            fullWidth={true}
            name="price"
            className="input-wrapper input"
            style={{ marginTop: '20px', marginRight: '10px' }}
          />
        </div>
        <div className="input-wrap1 same-line">
        <Field
            validate = {[required, number]}
            component={TextField}
            floatingLabelFixed={true}
            floatingLabelText={'Stock'}
            fullWidth={true}
            name="stock"
            className="input-wrapper input"
            style={{ marginTop: '20px', marginRight: '10px' }}
          />
        </div>
        </div>
        <RaisedButton
          fullWidth={false}
          type="submit"
          label="Add Item "
          primary={true}
          style={{ marginTop: '20px', marginLeft: '20%', width: '60%' }}
        />
       </form>
       <div className="items-list">
          <List>
            {items && items.map((item: any) => {
              return (
                <ListItem rightIcon={<IconButton onClick={() => this.handleAddItemToCart(item)}><ShoppingCart color="purple"/></IconButton>}
                          disabled={true}
                          key={item.key}>
                  <Item 
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    stock={item.stock}
                  />
                </ListItem>
              )
            })}
          </List>
       </div>
      </div>
      
    );
  }
}
