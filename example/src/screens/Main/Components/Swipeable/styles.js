import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F6F6F6"
  },
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20
  },
  rowData: {
    flex: 1
  },
  rowDataText: {
    fontSize: 24
  }
});
