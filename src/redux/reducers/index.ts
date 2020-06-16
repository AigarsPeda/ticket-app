import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
