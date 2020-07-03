import * as React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Formik } from "formik";
import { HelperText, Button, TextInput } from "react-native-paper";
import * as yup from "yup";
const LoginSchema = yup.object({
  email: yup.string().required().min(6),
  password: yup.string().required().min(6),
});

function LoginScreen({ navigation }) {
  const pressRegisterHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Login</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            <View>
              <TextInput
                label="E-mail"
                mode="outlined"
                value={props.values.email}
                onBlur={props.handleBlur("email")}
                onChangeText={props.handleChange("email")}
              />
              <HelperText>
                {props.touched.email && props.errors.email}
              </HelperText>
              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry={true}
                value={props.values.password}
                onBlur={props.handleBlur("password")}
                onChangeText={props.handleChange("password")}
              />
              <HelperText>
                {props.touched.password && props.errors.password}
              </HelperText>
              <Button mode="contained" onPress={props.handleSubmit}>
                Submit
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
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
