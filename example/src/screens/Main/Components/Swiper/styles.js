import { StyleSheet } from "react-native";

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  background1: "#ffffff"
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1
  },

  scrollview: {
    flex: 1
  },
  exampleContainer: {
    paddingVertical: 30
  },

  title: {
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: colors.black,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  slider: {
    marginTop: 15,
    overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  }
});
