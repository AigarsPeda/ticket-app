import { ITicket } from "./../../interfaces/interfaces";

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { RootState } from "../reducers";
import { getAllTickets } from "./../../services/ticket.services";
import {
  GET_ALL_TICKETS,
  UPDATE_TABLE_ENTRIES,
  SELECTED_TICKET,
  SET_ERROR,
  TicketActionTypes,
  SetErrorActionTypes
} from "./../types";

type AppThunk<ReturnType = any> = ThunkAction<
  ReturnType,
  RootState,
  TicketActionTypes | SetErrorActionTypes,
  Action<string>
>;

export const allTickets = (): AppThunk => async (dispatch) => {
  try {
    const allTickets = await getAllTickets();
    const { tickets }: { tickets: ITicket[] } = allTickets.data;

    dispatch({
      type: GET_ALL_TICKETS,
      payload: tickets
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message
      });
    }
  }
};

export const updateTableEntries = (entryNumber: number): AppThunk => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_TABLE_ENTRIES,
    payload: entryNumber
  });
};

export const selectedTicket = (ticket: ITicket): AppThunk => async (
  dispatch
) => {
  dispatch({
    type: SELECTED_TICKET,
    payload: ticket
  });
};

export const clearSelectedTicket = (): AppThunk => async (dispatch) => {
  dispatch({
    type: SELECTED_TICKET,
    payload: null
  });
};
