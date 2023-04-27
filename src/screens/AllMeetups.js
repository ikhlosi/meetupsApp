import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Card from "../shared/Card";
import uuid from "react-native-uuid";

const AllMeetups = () => {
  const [locations, setLocations] = useState([
    {
      id: uuid.v4(),
      title: "First Demo",
      address: "Meetupstr 1, 1000 MeetupCity",
      description: "Great meetup place which you shouldn't miss!",
      favorite: false,
    },
    {
      id: uuid.v4(),
      title: "Second Demo",
      address: "Meetupstr 2, 1000 MeetupCity",
      description: "I would go there if I was you.",
      favorite: false,
    },
  ]);
  return (
    <View>
      <FlatList
        data={locations}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.title}</Text>
            <Ionicons
              name="information-circle"
              size={24}
              color="cornflowerblue"
            />
            {/* <Ionicons name="heart-outline" size={24} color="indianred" /> */}
            <Ionicons
              name="heart-dislike-outline"
              size={24}
              color="indianred"
            />
          </Card>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default AllMeetups;

const styles = StyleSheet.create({});