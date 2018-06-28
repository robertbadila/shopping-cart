import * as types from './types';
import { itemsInitialState } from './initialState';
import { ItemsState } from './interface';

export default function reducer(state: ItemsState = itemsInitialState, action: any) {
  switch (action.type){
    case types.LOAD_ITEMS_START: {
      return {
        ...state,
        isLoading: true
      }
    };

    case types.LOAD_ITEMS_SUCCES: {
      return {
        ...state,
        isLoading: false,
        list: action.payload
      }
    };

    case types.LOAD_ITEMS_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    };

    case types.ADD_ITEM_START: {
      return {
        ...state,
        isLoading: true
      }
    };

    case types.ADD_ITEM_SUCCES: {
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload]
      }
    };

    case types.ADD_ITEM_ERROR: {
      return {
        ...state,
        isLoading: false,
        error:{...state.error, create:action.payload}
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}