import { StyleSheet } from "react-native";

export default StyleSheet.create({
  options: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    padding: 16
  },
  rightOption: {
    height: 100,
    width: 150,
    flexDirection: "row",
    alignItems: "center"
  },
  userAction: {
    height: 100,
    width: 75,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center"
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 16
  }
});
