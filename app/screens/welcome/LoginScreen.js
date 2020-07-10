import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Formik } from "formik";
import { HelperText, Button, TextInput } from "react-native-paper";
import { LoginSubmit } from "../../../redux/index";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
const LoginSchema = yup.object({
  email: yup.string().required().min(6),
  password: yup.string().required().min(6),
});

function LoginScreen({ navigation }) {
  const logindata = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const customLoginHandler = () => {
    navigation.navigate("DashboardScreen");
  };

  const pressLoginHandler = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Login</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(event) => dispatch(LoginSubmit(event))}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          
          }) => (
            <View>
              <TextInput
                label="E-mail"
                mode="outlined"
                name="email"
                value={values.email}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
              />
              <HelperText>
                {errors.email && touched.email && errors.email}
              </HelperText>
              <TextInput
                label="Password"
                mode="outlined"
                secureTextEntry={true}
                name="password"
                value={values.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
              />
              <HelperText>
                {errors.password && touched.password && errors.password}
              </HelperText>
              <Button mode="contained" onPress={handleSubmit}>
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
