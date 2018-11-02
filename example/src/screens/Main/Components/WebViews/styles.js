import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  addressBarRow: {
    flexDirection: "row",
    padding: 16
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ecef",
    borderColor: "transparent",
    borderRadius: 3
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dee2e6",
    borderColor: "transparent",
    borderRadius: 3
  },
  addressBarTextInput: {
    backgroundColor: "#e9ecef",
    borderColor: "transparent",
    borderRadius: 3,
    borderWidth: 1,
    height: 32,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14
  },
  webView: {
    backgroundColor: "white",
    flex: 1
  },
  goButton: {
    height: 30,
    padding: 4,
    marginLeft: 8,
    alignItems: "center",
    backgroundColor: "#e9ecef",
    borderColor: "transparent",
    borderRadius: 3,
    alignSelf: "stretch"
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    height: 32,
    backgroundColor: "#4285f4"
  },
  statusBarText: {
    color: "white",
    fontSize: 13
  }
});
