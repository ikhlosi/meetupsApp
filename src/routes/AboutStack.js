import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={() => {
          return { header: () => <Header title={"About"} /> };
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;

const styles = StyleSheet.create({});
