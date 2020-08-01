import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userType";

const initialState = {
  loading: false,
  users: [],
  offset: 0,
  sort: "id",
  order: "asc",
  max: 10,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        sort: action.payloadsort,
        order: action.payloadorder,
        max: action.payloadmax,
        offset: action.payloadoffset + 10,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
