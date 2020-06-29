import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function HomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("DashboardScreen");
  };
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      <Button mode="contained" onPress={pressHandler}>
        Hello Button
      </Button>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f00",
    alignItems: "center",
    justifyContent: "center",
  },
});
