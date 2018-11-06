import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class WebView extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>WebView</Text>
      </View>
    );
  }
}
