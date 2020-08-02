import { IUserData } from "./../../interfaces/interfaces";
// import { IUser } from "./../../interfaces/interfaces";
import { GET_USER, UserActions } from "./../types";

export interface IUserInitialState {
  user: IUserData | null;
}

// Initial State
const initialState: IUserInitialState = {
  user: null
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    default:
      return state;
  }
};
