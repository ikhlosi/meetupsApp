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
import { globalStyles } from "../styles/global";

const AllMeetups = ({ navigation }) => {
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
    {
      id: uuid.v4(),
      title: "Third Demo",
      address: "Meetupstr 3, 1000 MeetupCity",
      description: "I would go there if I was you.",
      favorite: false,
    },
  ]);

  const goToDetails = (item) => {
    navigation.navigate("MeetupDetails", item);
  };

  const toggleFavorite = (id) => {
    const updatedLocations = locations.map((location) => {
      if (location.id === id) {
        return { ...location, favorite: !location.favorite };
      }
      return location;
    });
    setLocations(updatedLocations);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={locations}
        renderItem={({ item }) => (
          <Card>
            <Text>{item.title}</Text>
            <Ionicons
              name="information-circle"
              size={24}
              color="cornflowerblue"
              onPress={() => goToDetails(item)}
            />
            {/* <Ionicons name="heart-outline" size={24} color="indianred" /> */}
            <Ionicons
              // name="heart-dislike-outline"
              name={item.favorite ? "heart-outline" : "heart-dislike-outline"}
              size={24}
              color="indianred"
              onPress={() => toggleFavorite(item.id)}
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
