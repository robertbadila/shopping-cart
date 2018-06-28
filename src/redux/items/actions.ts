import * as types from './types';
import { Item } from './interface';

export function addItemStart(){
  return{
    type: types.ADD_ITEM_START
  }
};

export function addItemSucces(item:Item){
  return{
    type: types.ADD_ITEM_SUCCES,
    payload: item,
  }
};

export function addItemError(err:any){
  return{
    type: types.ADD_ITEM_ERROR,
    payload: err
  }
};

export function loadItemsStart(){
  return {
    type: types.LOAD_ITEMS_START,
  }
};

export function loadItemsSucces(items: any){
  return {
    type: types.LOAD_ITEMS_SUCCES,
    payload: items
  }
};

export function loadItemsError(err: any){
  return {
    type: types.LOAD_ITEMS_ERROR,
    payload: err
  }
};

