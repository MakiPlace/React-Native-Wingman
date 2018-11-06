import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  titleHeader: {
    color: "#fff",
    fontSize: 16,
    marginStart: 16
  },

  containerChild: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  containerHeader: {
    backgroundColor: "#4285f4",
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center"
  },

  containerItem: {
    width: width / 6 - 32,
    height: width / 6 - 32,
    justifyContent: "center",
    alignItems: "center",
    margin: 16
  }
});
