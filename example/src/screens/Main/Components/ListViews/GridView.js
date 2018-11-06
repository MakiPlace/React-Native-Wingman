import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class GridView extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>GridView</Text>
      </View>
    );
  }
}
