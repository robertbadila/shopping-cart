import * as types from './types';
import { CartState } from "./interface";
import { cartInitialState } from "./initialState";

export default function reducer(state: CartState = cartInitialState, action: any) {
  switch(action.type){
    case types.ADD_ITEMS_TO_CART_START: {
      return {
        ...state,
        isLoading: true
      }
    };

    case types.ADD_ITEMS_TO_CART_SUCCES: {
      return {
        ...state,
        isLoading: false,
        list : [
             ...state.list,
             action.payload
              ]
      }
    };

    case types.ADD_ITEMS_TO_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    };

    case types.GET_ITEMS_IN_CART_START: {
      return {
        ...state,
        isLoading: true,
      }
    };
    
    case types.GET_ITEMS_IN_CART_SUCCES: {
      return {
        ...state,
        isLoading: false,
        list: action.payload
      }
    };

    case types.GET_ITEMS_IN_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    };

    case types.DELETE_ITEM_START: {
      return {
        ...state,
        isLoading: true,
      }
    };

    case types.DELETE_ITEM_SUCCESS: {
      let newList = [...state.list];
      let found: any = newList.find((element) => {
        return element.id === action.payload.id;
      });
      let idx = newList.indexOf(found);
        newList.splice(idx, 1);
          return {
            ...state,
            list: [
                ...newList
            ],
            isLoading: false
      }
    };

    case types.DELETE_ITEM_ERROR: {
      return {
        ...state,
        isLoading: false,
      }
    };

    default: {
      return {
        ...state
      }
    }
  } 
}