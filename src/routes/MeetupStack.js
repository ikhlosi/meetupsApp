import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllMeetups from "../screens/AllMeetups";
import MeetupDetails from "../screens/MeetupDetails";

const Stack = createStackNavigator();

const MeetupStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllMeetups" component={AllMeetups} />
      <Stack.Screen name="MeetupDetails" component={MeetupDetails} />
    </Stack.Navigator>
  );
};

export default MeetupStack;

const styles = StyleSheet.create({});
