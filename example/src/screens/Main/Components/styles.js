import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee"
  },
  gridItem: {
    justifyContent: "center",
    alignItems: "center",
    height: width / 3,
    backgroundColor: "#fff"
  },
  gridItemIcon: {
    lineHeight: 48
  },
  gridItemTitle: {
    marginTop: 5,
    color: "#212121"
  }
});
