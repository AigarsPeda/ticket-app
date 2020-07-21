import { SHOW_ADD_MODAL, SHOW_EDIT_MODAL, ModalActionTypes } from "./../types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

export const addModal = (
  payload: boolean
): ThunkAction<any, RootState, ModalActionTypes, Action<string>> => (
  dispatch
) => {
  dispatch({
    type: SHOW_ADD_MODAL,
    payload: payload
  });
};

export const editModal = (
  payload: boolean
): ThunkAction<any, RootState, ModalActionTypes, Action<string>> => (
  dispatch
) => {
  dispatch({
    type: SHOW_EDIT_MODAL,
    payload: payload
  });
};
