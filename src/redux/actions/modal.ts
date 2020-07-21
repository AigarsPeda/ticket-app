import { SHOW_ADD_MODAL, SHOW_EDIT_MODAL } from "./../types";

export const addModal = (payload: boolean) => (dispatch: any) => {
  dispatch({
    type: SHOW_ADD_MODAL,
    payload: payload
  });
};

export const editModal = (payload: boolean) => (dispatch: any) => {
  dispatch({
    type: SHOW_EDIT_MODAL,
    payload: payload
  });
};
