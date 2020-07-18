import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage
};

const rootReducers = combineReducers({
  auth: authReducer,
  error: errorReducer
});

export default persistReducer(persistConfig, rootReducers);

export type RootState = ReturnType<typeof rootReducers>;
