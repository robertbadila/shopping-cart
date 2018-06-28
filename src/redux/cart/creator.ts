import { Item } from "./interface";
import * as actions from './actions';
import { firebaseDb } from '../../firebase';

export function addItemsToCart(item: Item, user: any){
  return function (dispatch: any){
    dispatch(actions.addItemToCartStart());
    let itemRef:any = firebaseDb.ref().child(`/cart/${user}`).push();
    let key = itemRef.getKey();
    item.id =  key;
    itemRef.set(item, (error: any)=>{
      if(error){
        dispatch(actions.addItemToCartError(error));
      } else {
        dispatch(actions.addItemToCartSucces(item));
      }
    })
  }
};

export function getItemsInCart(user:any) {
  return function(dispatch:any){
    dispatch(actions.getItemsInCartStart());
    firebaseDb.ref(`/cart/${user}`).once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        const cartItems = [];
        for(var key in data) {
          if(data.hasOwnProperty(key)) {
            cartItems.push(data[key]);
          }
      };
      dispatch(actions.getItemsInCartSucces(cartItems));
      })
      .catch((err) => {
        dispatch(actions.getItemsInCartError(err));
      })
  }
};

export function deleteItem(user: string, item: Item) {
  return function (dispatch: Function) {
      dispatch (actions.deleteItemStart());
      firebaseDb.ref().child(`/cart/${user}/${item.id}`).remove((error) => {
          if(error) { 
              dispatch(actions.deleteItemError(error));
          } else {
              dispatch(actions.deleteItemSuccess(item));
          }
      });
  };
};
