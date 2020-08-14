import { ITicket, IUserData } from "./../interfaces/interfaces";
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
export type SetErrorActionTypes = ISetErrorAction;

// MODAL
export const SHOW_ADD_MODAL = "SHOW_ADD_MODAL";
interface IShowAddModal {
  type: typeof SHOW_ADD_MODAL;
  payload: boolean;
}

export const SHOW_EDIT_MODAL = "SHOW_EDIT_MODAL";
interface IShowEditModal {
  type: typeof SHOW_EDIT_MODAL;
  payload: boolean;
}

export type ModalActionTypes = IShowAddModal | IShowEditModal;

// TICKETS
export const GET_USER_TICKETS = "GET_USER_TICKETS";
interface IGetUserTickets {
  type: typeof GET_USER_TICKETS;
  payload: ITicket[];
}

export const GET_ALL_TICKETS = "GET_ALL_TICKETS";
interface IGetAllTickets {
  type: typeof GET_ALL_TICKETS;
  payload: ITicket[];
}

export const UPDATE_TABLE_ENTRIES = "UPDATE_TABLE_ENTRIES";
interface IUpdateTableEntries {
  type: typeof UPDATE_TABLE_ENTRIES;
  payload: number;
}

export const SELECTED_TICKET = "SELECTED_TICKET";
interface ISelectedTicket {
  type: typeof SELECTED_TICKET;
  payload: ITicket | null;
}

export type TicketActionTypes =
  | IGetUserTickets
  | IGetAllTickets
  | IUpdateTableEntries
  | ISelectedTicket;

// USER
export const GET_USER = "GET_USER";
interface IGetUser {
  type: typeof GET_USER;
  payload: IUserData;
}
export type UserActions = IGetUser;

// LOGOUT
export const LOGOUT = "LOGOUT";
interface ILogout {
  type: typeof LOGOUT;
  payload: null;
}

export type LogOutActionTypes = ILogout;
