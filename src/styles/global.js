import { StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    margin: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  titleText: {
    fontFamily: "cute-easter",
    fontSize: 36,
    color: "cornflowerblue",
  },
});
