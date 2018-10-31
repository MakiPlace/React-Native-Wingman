import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  options: {
    flex: 1,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  rightOption: {
    height: 80,
    width: 160,
    flexDirection: "row",
    alignItems: "center"
  },
  userAction: {
    height: 80,
    width: 80,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center"
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 16
  },
  textOption: {
    fontSize: 13,
    fontWeight: "500",
    color: "white"
  }
});
