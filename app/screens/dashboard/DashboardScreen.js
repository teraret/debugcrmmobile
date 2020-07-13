import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { logoutHandler, loadLogoutSuccess } from "../../../redux/index";
import { useSelector, useDispatch } from "react-redux";

import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

function DashboardScreen({ navigation }) {
  //  const [token, setToken] = useState("");
  const companydata = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
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
