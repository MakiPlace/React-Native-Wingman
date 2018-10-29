import { StyleSheet } from "react-native";
import { white } from "ansi-colors";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#eee",
    padding: 16
  },
  title: {
    marginTop: 10,
    marginBottom: 8
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    marginLeft: 8
  },
  wrapperIcon: {
    flexDirection: "row",
    marginRight: 8
  }
});
