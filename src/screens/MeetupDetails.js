import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";

const MeetupDetails = ({ route }) => {
  const { id, favorite, ...locationDetails } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        {Object.keys(locationDetails).map((key) => (
          <>
            <Text style={globalStyles.titleText}>
              {capitalizeFirstLetter(key)}
            </Text>
            <Text>{locationDetails[key]}</Text>
          </>
        ))}
        {/* <Text>{locationDetails.title}</Text>
        <Text>{locationDetails.address}</Text>
        <Text>{locationDetails.description}</Text> */}
      </Card>
    </View>
  );
};

export default MeetupDetails;

const styles = StyleSheet.create({});

const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
