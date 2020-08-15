import { LOGOUT } from "./../types";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer, { IAuthInitialState } from "./authReducer";
import errorReducer, { IErrorInitialState } from "./errorReducer";
import modalReducer, { IModalInitialState } from "./modalReducer";
import ticketReducer, { ITicketInitialState } from "./ticketReducer";
import userReducer, { IUserInitialState } from "./userReducer/userReducer";

// interface IRootState {
//   auth: IAuthInitialState;
//   error: IErrorInitialState;
//   modal: IModalInitialState;
//   tickets: ITicketInitialState;
//   user: IUserInitialState;
// }

// type IDefaultState = IRootState | undefined;

interface IDefaultState {
  auth: IAuthInitialState;
  error: IErrorInitialState;
  modal: IModalInitialState;
  tickets: ITicketInitialState;
  user: IUserInitialState;
}

const persistConfig = {
  key: "root",
  storage
};

const appReducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
  modal: modalReducer,
  tickets: ticketReducer,
  user: userReducer
});

// TO DO - WHAT IS THOSE ANY ?
const rootReducers = (state: IDefaultState | undefined, action: any) => {
  let newState = state;
  if (action.type === LOGOUT) {
    newState = undefined;
  }
  return appReducers(newState, action);
};

export default persistReducer(persistConfig, rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
