import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { logoutHandler, loadLogoutSuccess } from "../../../redux/index";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Formik } from "formik";

function DashboardScreen({ navigation }) {
  //  const [token, setToken] = useState("");
  const companydata = useSelector((state) => state.login);

  const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   dispatch(loadLogoutSuccess);
  //   console.log("Logout Pressed");
  //   // try {
  //   //   await AsyncStorage.removeItem("access_token");
  //   //   dispatch(loadLogoutSuccess);
  //   // } catch (e) {
  //   //   console.log(e);
  //   // }
  // };

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("access_token");
  //       if (value !== null) {
  //         setToken("the value is" + value.toString);
  //         console.log("the value is" + value.toString);
  //       }
  //     } catch (e) {
  //       // error reading value
  //     }
  //   })();
  // });

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        {/* <Text>hello {companydata.token}</Text> */}

        <Button mode="outlined" onPress={() => dispatch(logoutHandler())}>
          logout
        </Button>
        {/* <Formik onSubmit={() => logoutHandler()}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Button mode="outlined" onPress={() => handleSubmit()}>
              Login
            </Button>
          )}
        </Formik> */}
      </ScrollView>
    </View>
  );
}
export default DashboardScreen;
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },

  headingStyle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
});
