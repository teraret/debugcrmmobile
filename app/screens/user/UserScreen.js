import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { ActivityIndicator, Colors, Text } from "react-native-paper";
import { fetchUsers } from "./../../../redux/index";
function UserScreen() {
  const userdata = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return userdata.loading ? (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </ScrollView>
    </View>
  ) : userdata.error ? (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text>{userdata.error}</Text>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <DataTable>
          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
          <DataTable.Header>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>First Name</DataTable.Title>
            <DataTable.Title>Last Name</DataTable.Title>
            <DataTable.Title>Mobile</DataTable.Title>
          </DataTable.Header>
          {userdata.users.map((user) => (
            <DataTable.Row>
              <DataTable.Cell>{user.id}</DataTable.Cell>
              <DataTable.Cell>{user.firstName}</DataTable.Cell>
              <DataTable.Cell>{user.lastName}</DataTable.Cell>
              <DataTable.Cell>{user.mobile}</DataTable.Cell>
            </DataTable.Row>
          ))}
          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={(page) => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>
      </ScrollView>
    </View>
  );
}

export default UserScreen;

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
