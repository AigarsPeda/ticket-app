// AUTH TYPES
export const AUTHENTICATE_USER = "AUTHENTICATE_USER";
interface IAuthenticateUserAction {
  type: typeof AUTHENTICATE_USER;
  payload: string;
}
export type AuthenticateActionTypes = IAuthenticateUserAction;

// ERROR
export const SET_ERROR = "SET_ERROR";
interface ISetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}
// export type SetErrorActionTypes = ISetErrorAction;

// SHOW MODAL
export const SHOW_ADD_MODAL = "SHOW_ADD_MODAL";
interface IShowAddModal {
  type: typeof SHOW_ADD_MODAL;
  payload: boolean;
}
// export type ShowAddModal = IShowAddModal;

// EDIT MODAL
export const SHOW_EDIT_MODAL = "SHOW_EDIT_MODAL";
interface IShowEditModal {
  type: typeof SHOW_EDIT_MODAL;
  payload: boolean;
}
export type ModalActionTypes = IShowAddModal | IShowEditModal;
