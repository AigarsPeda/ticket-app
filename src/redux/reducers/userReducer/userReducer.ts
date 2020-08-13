import { IUserData } from "../../../interfaces/interfaces";
// import { IUser } from "./../../interfaces/interfaces";
import { GET_USER, UserActions } from "../../types";

export interface IUserInitialState {
  user: IUserData;
}

// Initial State
const initialState: IUserInitialState = {
  user: {
    date: "",
    role: "",
    tickets: [],
    username: "",
    __v: 0,
    _id: ""
  }
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case GET_USER:
      return { user: action.payload };

    default:
      return state;
  }
};
