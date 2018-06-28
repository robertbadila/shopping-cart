import * as types from './types';

export const hideModal = (modalName: string) => ({
  type: types.HIDE_MODAL,
});

export const showModal = (modalName: string, data?: any) => ({
  type: types.SHOW_MODAL,
  payload: modalName,
});
