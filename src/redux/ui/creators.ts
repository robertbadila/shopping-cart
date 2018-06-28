import { reset } from 'redux-form';

export const resetForm = (formName: any) => {
  return function (dispatch: any) {
    dispatch(reset(formName));
  };
};
