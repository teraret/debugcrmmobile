import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { logoutHandler, loadLogoutSuccess } from "../../../redux/index";
import { useSelector, useDispatch } from "react-redux";

function DashboardScreen({ navigation }) {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   Auth.logOut();
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
        <Text>hello </Text>
        <Button mode="outlined" onPress={() => dispatch(loadLogoutSuccess())}>
          Login
        </Button>
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
