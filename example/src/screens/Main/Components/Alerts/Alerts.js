import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

export default class Alerts extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Text style={ { marginBottom: 8 } }>One Button Alert</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Alert.alert(
            "Alert Title",
            "My Alert Message",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
        }}
        style={[styles.btn, styles.btnSuccess, styles.btnBlock, { marginBottom: 6 }]}
      >
        <Text style={styles.textWhite}>Show Alert</Text>
      </TouchableOpacity>
      <Text style={ { marginTop: 10, marginBottom: 8 } }>Two Button Alert</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Alert.alert(
            "Alert Title",
            "My Alert Message",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }}
        style={[styles.btn, styles.btnWarning, styles.btnBlock, { marginBottom: 6 }]}
      >
        <Text style={styles.textWhite}>Show Alert</Text>
      </TouchableOpacity>
      <Text style={ { marginTop: 10, marginBottom: 8 } }>Three Button Alert</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          Alert.alert(
            "Alert Title",
            "My Alert Message",
            [
              {
                text: "Later",
                onPress: () => console.log("Ask me later pressed")
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }}
        style={[styles.btn, styles.btnDanger, styles.btnBlock, { marginBottom: 6 }]}
      >
        <Text style={styles.textWhite}>Show Alert</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
