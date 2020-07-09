import { LOGIN, LOGOUT } from "./loginType";
import axios from "axios";
import SERVER_URL from "./../../config";
import {
  checkResponseStatus,
  loginResponseHandler,
} from "./../../handlers/responseHandlers";
import Auth from "./../../security/auth";

import AsyncStorage from "@react-native-community/async-storage";

const loadRetriveTokkenSuccess = () => {
  return {
    type: RETRIVE_TOKKEN,
  };
};

export const loadLoginSuccess = (token) => {
  return {
    type: LOGIN,
    payload: token,
  };
};

export const loadLogoutSuccess = () => {
  return {
    type: LOGOUT,
  };
};

const customLoginHandler = () => {};

export const RetriveTokkenSuccess = () => {
  return (dispatch) => {
    if (Auth.loggedIn()) {
      dispatch(loadLoginSuccess);
    } else {
      dispatch(loadLogoutSuccess);
    }
  };
};

export const LoginSubmit = (e) => {
  return (dispatch) => {
    console.log(SERVER_URL + "/api/login");
    axios
      .post(SERVER_URL + "/api/login", {
        username: e.email,
        password: e.password,
      })
      .then(checkResponseStatus)
      .then(async (response) => {
        try {
          const jsonValue = null;
          jsonValue = JSON.stringify(response);
          await AsyncStorage.setItem("access_token", jsonValue);
          dispatch(loadLoginSuccess(jsonValue));
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => console.log("The error is " + error));
  };
};

export const logoutHandler = () => {
  return (dispatch) => {
    Auth.logOut();
  };
};
