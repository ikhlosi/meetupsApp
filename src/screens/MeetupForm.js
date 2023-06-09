import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import * as yup from "yup";

const locationSchema = yup.object({
  title: yup.string().required().min(4),
  address: yup.string().required().min(4),
  description: yup.string().required().min(8),
});

const MeetupForm = ({ addLocation }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", address: "", description: "" }}
        validationSchema={locationSchema}
        onSubmit={(values) => addLocation(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            {Object.keys(values).map((value, i) => {
              return (
                <View style={styles.inputContainer}>
                  <Text style={styles.error}>
                    {touched[value] && errors[value]}
                  </Text>
                  <TextInput
                    placeholder={capitalizeFirstLetter(value)}
                    onChangeText={handleChange(value)}
                    value={values[value]}
                    onBlur={handleBlur(value)}
                    style={[
                      styles.input,
                      { minHeight: value === "description" ? 80 : undefined },
                    ]}
                    key={i}
                    multiline={value === "description" ? true : false}
                  />
                </View>
              );
            })}
            <Button onPress={handleSubmit} title="Add new meetup" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default MeetupForm;

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 15,
  },
  inputContainer: {
    marginVertical: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  error: {
    color: "red",
  },
});
