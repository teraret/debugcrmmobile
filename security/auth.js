import SERVER_URL from "./../config";
import { checkResponseStatus } from "./../handlers/responseHandlers";
import "whatwg-fetch";
import qs from "qs";
import AsyncStorage from "@react-native-community/async-storage";

export default {
  async logIn(auth) {
    try {
      await AsyncStorage.setItem("access_token",  JSON.stringify(auth))
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  },
  async logOut() {
    try {
      await AsyncStorage.removeItem("access_token");
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  },

  refreshToken() {
    return fetch(SERVER_URL + "/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: qs.stringify({
        grant_type: "refresh_token",
        refresh_token: JSON.parse(AsyncStorage.auth).refresh_token,
      }),
    })
      .then(checkResponseStatus)
      .then((a) => (AsyncStorage.auth = JSON.stringify(a)))
      .catch(() => {
        throw new Error("Unable to refresh!");
      });
  },

  loggedIn() {
    return AsyncStorage.auth;
  },
};
