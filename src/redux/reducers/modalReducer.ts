import {
  SHOW_ADD_MODAL,
  SHOW_EDIT_MODAL,
  ShowAddModal,
  ShowEditModal
} from "./../types";

export interface IModalInitialState {
  add: boolean;
  edit: boolean;
}

// Initial State
const initialState: IModalInitialState = {
  add: false,
  edit: false
};

export default (state = initialState, action: ShowAddModal | ShowEditModal) => {
  switch (action.type) {
    case SHOW_ADD_MODAL:
      return {
        ...state,
        add: action.payload
      };
    case SHOW_EDIT_MODAL:
      return {
        ...state,
        edit: action.payload
      };

    default:
      return state;
  }
};
