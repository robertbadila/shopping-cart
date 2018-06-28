import * as types from './types';
import * as authTypes from '../auth/types';
import { initialState } from './initialState';
import { UiState } from './interface';

export default function reducer(state: UiState = initialState, action: any) {
  switch (action.type) {

    case types.SHOW_MODAL: {
      return {
        ...state,
        activeModal: action.payload,
      };
    }

    case types.HIDE_MODAL: {
      return {
        ...state,
        activeModal: null,
      };
    }

    case authTypes.REQUEST_AUTH: {
      return {
        ...state,
        activeModal: 'requestAuth'
      };
    }

    default: {
      return { ...state };
    }
  }
}