import SERVER_URL from "./../../config";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userType";
import axios from "axios";
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users, max, order, sort, offset) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
    payloadmax: max,
    payloadorder: order,
    payloadsort: sort,
    payloadoffset: offset,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const fetchUsers = (sort, order, max, offset) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(
        SERVER_URL +
          "/user?max=" +
          max +
          "&offset=" +
          offset +
          "&order=" +
          order +
          "&sort=" +
          sort
      )
      .then((response) => {
        const users = response.data.user;
        dispatch(fetchUsersSuccess(users, max, order, sort, offset));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
