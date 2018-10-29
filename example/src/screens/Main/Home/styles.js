import { StyleSheet } from "react-native";

export const GRAY_600 = "#6c757d";
export default StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee"
  },
  textCenter: {
    textAlign: "center"
  },
  textMuted: {
    color: GRAY_600
  },
  logo: {
    flex: 10,
    justifyContent: "center"
  },
  footer: {
    flex: 1
  }
});
