import { StyleSheet } from "react-native";
import { Colors } from "./Constant";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#eee"
  },
  container: {
    padding: 16
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  p: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16
  },
  h1: {
    fontSize: 30,
    marginTop: 8,
    marginBottom: 16,
    fontWeight: "500"
  },
  h2: {
    fontSize: 24,
    marginTop: 8,
    marginBottom: 16,
    fontWeight: "500"
  },
  h3: {
    fontSize: 20,
    marginTop: 8,
    marginBottom: 16,
    fontWeight: "500"
  },
  h4: {
    fontSize: 18,
    marginTop: 8,
    marginBottom: 16,
    fontWeight: "500"
  },

  textSmall: { fontSize: 12 },
  textLarge: { fontSize: 16 },

  mark: {
    backgroundColor: "#fcf8e3"
  },
  del: {
    textDecorationLine: "line-through"
  },
  s: {
    textDecorationLine: "line-through"
  },
  ins: {
    textDecorationLine: "underline"
  },
  u: {
    textDecorationLine: "underline"
  },
  small: {
    fontSize: 12
  },
  strong: {
    fontWeight: "bold"
  },
  em: {
    fontStyle: "italic"
  },
  textJustify: {
    textAlign: "justify"
  },
  textLeft: {
    textAlign: "left"
  },
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  },
  textWhite: { color: Colors.WHITE },
  textBlack: { color: Colors.BLACK },
  textPrimary: { color: Colors.PRIMARY },
  textSecondary: { color: Colors.SECONDARY },
  textSuccess: { color: Colors.SUCCESS },
  textWarning: { color: Colors.WARNING },
  textDanger: { color: Colors.DANGER },
  textInfo: { color: Colors.INFO },
  textLight: { color: Colors.LIGHT },
  textDark: { color: Colors.DARK },

  bgWhite: { backgroundColor: Colors.WHITE },
  bgPrimary: { backgroundColor: Colors.PRIMARY },
  bgSecondary: { backgroundColor: Colors.SECONDARY },
  bgSuccess: { backgroundColor: Colors.SUCCESS },
  bgWarning: { backgroundColor: Colors.WARNING },
  bgDanger: { backgroundColor: Colors.DANGER },
  bgInfo: { backgroundColor: Colors.INFO },
  bgLight: { backgroundColor: Colors.LIGHT },
  bgDark: { backgroundColor: Colors.DARK },

  fontWeightBold: {
    fontWeight: "bold"
  },
  fontWeightNormal: {
    fontWeight: "normal"
  },
  fontWeightLight: {
    fontWeight: "100"
  }
});
