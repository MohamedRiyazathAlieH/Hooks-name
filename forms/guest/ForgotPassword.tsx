import * as React from "react";
import { StyleSheet, TextInput, Button, Text, Alert, ImageBackground, View, Pressable } from "react-native";
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


export default function ForgotPassword() {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state: any) => state.auth);
    const defaultValues = { email: "test@example.com", password: "Password@123" }

    const handleSubmit = async (values: LoginCredentials) => {
        console.log("clcicked", values);

        try {
            const response = await api.post("/guest/forgot-password", values);
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900"
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
                    <View className="flex-1 justify-center items-center">
                        <Text className="bg-green-800">Testing</Text>
                    </View>

                    <Pressable
                        className="bg-blue-400 rounded-lg p-4"
                        onPress={() => handleSubmit()}
                    >
                        <Text className="text-white font-bold text-center">Log In</Text>
                    </Pressable>

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
