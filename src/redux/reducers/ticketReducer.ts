import { ITicket } from "./../../interfaces/interfaces";
import {
  GET_USER_TICKETS,
  GET_ALL_TICKETS,
  UPDATE_TABLE_ENTRIES,
  SELECTED_TICKET,
  TicketActionTypes
} from "./../types";

export interface ITicketInitialState {
  userTickets: ITicket[];
  tickets: ITicket[];
  selectedTicket: ITicket | null;
  entries: number;
}

// Initial State
const initialState: ITicketInitialState = {
  userTickets: [],
  tickets: [],
  selectedTicket: null,
  entries: 0
};

export default (state = initialState, action: TicketActionTypes) => {
  switch (action.type) {
    case GET_USER_TICKETS:
      return {
        ...state,
        userTickets: action.payload
      };
    case GET_ALL_TICKETS:
      return {
        ...state,
        tickets: action.payload
      };
    case UPDATE_TABLE_ENTRIES:
      return {
        ...state,
        entries: action.payload
      };

    case SELECTED_TICKET:
      return {
        ...state,
        selectedTicket: action.payload
      };

    default:
      return state;
  }
};
