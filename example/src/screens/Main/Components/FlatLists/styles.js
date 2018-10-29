import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee"
  },
  list: {
    backgroundColor: "white",
    flexGrow: 1
  },
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
  searchRow: {
    paddingHorizontal: 10
  },
  headerFooter: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(239, 239, 244)",
    padding: 8
  },
  exampleText: {
    fontSize: 12
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});
