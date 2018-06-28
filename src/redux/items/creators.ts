import { Item } from "./interface";
import * as actions from './actions';
import { firebaseDb } from '../../firebase';

export function addItem(item:Item){
  return function(dispatch:any){
    dispatch(actions.addItemStart());
    //firebase functions
    let itemRef:any = firebaseDb.ref().child(`/items/`).push();
    let key = itemRef.getKey();
    item.id =  key;
    itemRef.set(item, (error: any)=>{
      if(error){
        dispatch(actions.addItemError(error));
      } else {
        dispatch(actions.addItemSucces(item));
      }
    })
  }
};

export function loadItems(){
  return function(dispatch: any){
    dispatch(actions.loadItemsStart());
    firebaseDb.ref('/items/').once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        const items = [];
        for(var key in data) {
          if(data.hasOwnProperty(key)) {
            items.push(data[key]);
          }
      };
      dispatch(actions.loadItemsSucces(items));
      })
      .catch((err) => {
        dispatch(actions.loadItemsError(err))
      });
  }
};