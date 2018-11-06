import { StyleSheet } from "react-native";

export default StyleSheet.create({
  centerItem: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center"
  },

  styleButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 16
  },

  boxInput: {
    paddingStart: 16,
    paddingEnd: 16,
    width: "100%",
    height: 56,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee"
  },

  titleHeader: {
    color: "#fff",
    fontSize: 16,
    marginStart: 16
  },

  containerHeader: {
    backgroundColor: "#4285f4",
    width: "100%",
    padding: 9,
    flexDirection: "row",
    alignItems: "center"
  },

  textLabel: {
    fontSize: 14
  },

  containerIconInput: {
    paddingLeft: 16,
    width: "100%",
    height: 56,
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center"
  }
});
