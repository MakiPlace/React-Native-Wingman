import { StyleSheet, Dimensions } from "react-native";

export const { width: SCREEN_WIDTH } = Dimensions.get("window");

const RADIUS = 3;
export const CARD_WIDTH_PERCENT = 0.8;
const CARD_MARGIN_PERCENT = (1 - CARD_WIDTH_PERCENT) / 2;
const CARD_MARGIN = 8;

export default StyleSheet.create({
  container: {
    flex: 1
  },

  card: {
    flex: 1,
    marginHorizontal: CARD_MARGIN,
    marginBottom: CARD_MARGIN
  },

  shadowCard: {
    position: "absolute",
    height: 16,
    backgroundColor: "white",
    borderRadius: RADIUS
  },

  imageWrapper: {
    flex: 1,
    marginBottom: 18,
    marginTop: 4,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: RADIUS,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.24,
    shadowColor: "black"
  },

  image: {
    flex: 1,
    borderRadius: RADIUS
  },

  title: {
    paddingVertical: 16,
    paddingLeft: SCREEN_WIDTH * CARD_MARGIN_PERCENT + CARD_MARGIN,
    fontWeight: "bold",
    fontSize: 16
  }
});
