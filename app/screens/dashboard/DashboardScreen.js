import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function DashboardScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://source.unsplash.com/1600x900/?medical",
      }}
    >
      <Button style={styles.loginButton} mode="outlined" onPress={pressHandler}>
        Login
      </Button>
      <Button
        style={styles.registerButton}
        mode="outlined"
        onPress={pressHandler}
      >
        Register
      </Button>
    </ImageBackground>
  );
}
export default DashboardScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#008000",
  },
  registerButton: {
    backgroundColor: "#FFA500",
  },
});
