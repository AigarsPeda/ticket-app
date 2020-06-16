export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

interface IAuthenticateUserAction {
  type: typeof AUTHENTICATE_USER;
  payload: string;
}

export type AuthenticateActionTypes = IAuthenticateUserAction;

export const SET_ERROR = "SET_ERROR";

interface ISetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type SetErrorActionTypes = ISetErrorAction;
