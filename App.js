import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import AllMeetups from "./src/screens/AllMeetups";
import TabNav from "./src/routes/TabNav";

export default function App() {
  const [fontLoaded] = useFonts({
    "cute-easter": require("./assets/fonts/CuteEasterPersonalUse-Wy8nV.ttf"),
    "pacifico-regular": require("./assets/fonts/PacificoRegular-BXvV.ttf"),
  });

  if (!fontLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <TabNav />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
