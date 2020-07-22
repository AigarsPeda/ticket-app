import { SHOW_ADD_MODAL, SHOW_EDIT_MODAL, ModalActionTypes } from "./../types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";

type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  ModalActionTypes,
  Action<string>
>;

export const addModal = (payload: boolean): AppThunk => (dispatch) => {
  dispatch({
    type: SHOW_ADD_MODAL,
    payload: payload
  });
};

export const editModal = (payload: boolean): AppThunk => (dispatch) => {
  dispatch({
    type: SHOW_EDIT_MODAL,
    payload: payload
  });
};
