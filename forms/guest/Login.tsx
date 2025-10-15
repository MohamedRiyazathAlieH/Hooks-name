import * as React from "react";
import { StyleSheet, Alert, ImageBackground, View } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/store/authSlice";
import api from "@/api/axios";
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginCredentials } from "@/interfaces/loginCredentials";

const rules = {
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
}

const validationSchema = Yup.object().shape(rules);



export default function Login() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: any) => state.auth);
  const defaultValues = { email: "test@example.com", password: "Password@123" }

  const handleSubmit = async (values: LoginCredentials) => {
    console.log("clcicked", values);
    try {
      const response = await api.post("/auth/login", values);
      return response.data;
    } catch (err) {
      console.error("Login error", err);
      throw err;
    }
    // dispatch(login({id:2}))
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            label="Username"
            mode="outlined"
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}
          <TextInput
            label="Password"
            value={values.password}
            mode="outlined"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            secureTextEntry
            style={styles.input}
          />

          <Button mode="contained" onPress={() => handleSubmit()} style={styles.button}>
            Log In
          </Button>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red'
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
  },
  card: {
    borderRadius: 12,
    padding: 10,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
    paddingVertical: 6,
  },
});
