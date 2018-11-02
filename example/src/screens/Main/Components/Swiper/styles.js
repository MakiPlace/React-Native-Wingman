import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    padding:10
  },
  textInput: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 350,
    height: 50,
  },
  textArea: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 350,
  },
  picker: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 150,
  },
  switch: { 
    flexDirection:"row",
    padding: 20
  },
  slider: {
    flexDirection:"row",
    padding: 20
  },
  checkBox: {
    paddingLeft: 10
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#11f62f',
  }
});
