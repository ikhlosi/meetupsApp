import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const MeetupDetails = ({ route }) => {
  const { id, favorite, ...locationDetails } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        {Object.keys(locationDetails).map((key, i) => (
          <View key={i}>
            <Text style={globalStyles.titleText}>
              {capitalizeFirstLetter(key)}
            </Text>
            <Text>{locationDetails[key]}</Text>
          </View>
        ))}
      </Card>
    </View>
  );
};

export default MeetupDetails;

const styles = StyleSheet.create({});
