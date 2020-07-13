import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function WelcomeScreen(props) {
  const pressLoginHandler = () => {
    props.navigation.navigate("LoginScreen");
  };
  const pressRegisterHandler = () => {
    props.navigation.navigate("RegisterScreen");
  };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://source.unsplash.com/1600x900/?medical",
      }}
    >
      <Button
        style={styles.loginButton}
        mode="outlined"
        onPress={pressLoginHandler}
      >
        Login
      </Button>
      <Button
        style={styles.registerButton}
        mode="outlined"
        onPress={pressRegisterHandler}
      >
        Register
      </Button>
    </ImageBackground>
  );
}

export default WelcomeScreen;
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
