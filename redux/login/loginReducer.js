import { RETRIVE_TOKKEN, LOGIN, LOGOUT } from "./loginType";

const initialState = {
  loading: true,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIVE_TOKKEN:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
