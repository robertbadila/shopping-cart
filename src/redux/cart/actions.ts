import * as types from './types';
import { Item } from './interface';

export function addItemToCartStart(){
  return{
    type: types.ADD_ITEMS_TO_CART_START
  }
};

export function addItemToCartSucces(item: Item){
  return{
    type: types.ADD_ITEMS_TO_CART_SUCCES,
    payload: item
  }
};

export function addItemToCartError(err: any){
  return{
    type: types.ADD_ITEMS_TO_CART_ERROR,
    payload: err
  }
};

export function getItemsInCartStart(){
  return {
    type: types.GET_ITEMS_IN_CART_START,
  }
};

export function getItemsInCartSucces(items: any){
  return {
    type: types.GET_ITEMS_IN_CART_SUCCES,
    payload: items
  }
};

export function getItemsInCartError(err: any){
  return {
    type: types.GET_ITEMS_IN_CART_ERROR,
    payload: err
  }
};

export function deleteItemStart() {
  return {
    type: types.DELETE_ITEM_START
  };
};

export function deleteItemSuccess(Item: Item) {
  return {
    type: types.DELETE_ITEM_SUCCESS,
    payload: Item
  };
};

export function deleteItemError(err: any) {
  return {
    type: types.DELETE_ITEM_ERROR,
    payload: err
  };
};
