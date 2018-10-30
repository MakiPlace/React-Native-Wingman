import { StyleSheet } from "react-native";

export default StyleSheet.create({
  options: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 8,
    margin: 8
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 16
  },
  list: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  }
});
