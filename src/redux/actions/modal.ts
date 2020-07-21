import { SHOW_ADD_MODAL, SHOW_EDIT_MODAL, ModalActionTypes } from "./../types";
import { Dispatch } from "redux";

export const addModal = (payload: boolean) => (
  dispatch: Dispatch<ModalActionTypes>
) => {
  dispatch({
    type: SHOW_ADD_MODAL,
    payload: payload
  });
};

export const editModal = (payload: boolean) => (
  dispatch: Dispatch<ModalActionTypes>
) => {
  dispatch({
    type: SHOW_EDIT_MODAL,
    payload: payload
  });
};
