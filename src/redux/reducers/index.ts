import { combineReducers } from "redux";

const rootReducers = combineReducers({
  //   auth: "",
  //   error: "",
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
