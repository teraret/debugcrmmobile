import React from "react";

import { View, StyleSheet, ScrollView, Text } from "react-native";

import FormBuilder from "react-native-paper-form-builder";

import { useForm } from "react-hook-form";

import { Button } from "react-native-paper";
import { Formik } from "formik";

function RegisterScreen({ navigation }) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const pressLoginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.headingStyle}>Registration</Text>

        <Formik>
          <FormBuilder
            form={form}
            formConfigArray={[
              {
                type: "input",
                name: "email",
                label: "Email",
                rules: {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                },
                textInputProps: {
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                },
              },

              {
                type: "input",
                name: "password",
                label: "Password",
                rules: {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                },
                textInputProps: {
                  secureTextEntry: true,
                },
              },
            ]}
          >
            <Button
              mode={"contained"}
              onPress={form.handleSubmit((data) => {
                console.log("form data", data);
              })}
            >
              Submit
            </Button>
            <Button onPress={pressLoginHandler}>Login</Button>
          </FormBuilder>
        </Formik>
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;
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
