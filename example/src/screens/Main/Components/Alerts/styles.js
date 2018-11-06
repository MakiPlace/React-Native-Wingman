import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#eee"
  },

  container: {
    padding: 16
  },

  textWhite: { color: "#fff" },

  btn: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignSelf: 'flex-start'
  },

  btnSuccess: { backgroundColor: "#0f9d58", borderColor: "#0f9d58" },
  btnWarning: { backgroundColor: "#f4b400", borderColor: "#f4b400" },
  btnDanger: { backgroundColor: "#db4437", borderColor: "#db4437" },

  btnBlock: {
    alignSelf: "auto",
    alignItems: "center"
  },
});
