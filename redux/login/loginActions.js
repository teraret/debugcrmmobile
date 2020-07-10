import { LOGIN, LOGOUT } from "./loginType";
import axios from "axios";
import SERVER_URL from "./../../config";
import { checkResponseStatus } from "./../../handlers/responseHandlers";

import AsyncStorage from "@react-native-community/async-storage";

export const loadRetriveTokenSuccess = (token) => {
  return {
    type: RETRIVE_TOKEN,
    payload: token,
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
    payload: null,
  };
};

export const RetriveTokenSuccess = () => {
  return async (dispatch) => {
    try {
      let value = await AsyncStorage.getItem("access_token");
      dispatch(loadRetriveTokenSuccess(value));
    } catch (e) {
      // error reading value
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
          let jsonValue = null;
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
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("access_token");
      dispatch(loadLogoutSuccess());
    } catch (e) {
      console.log(e);
    }
  };
};
