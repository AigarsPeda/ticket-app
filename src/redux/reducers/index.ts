import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import modalReducer from "./modalReducer";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
  modal: modalReducer,
  tickets: ticketReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
