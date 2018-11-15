import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import AreaCharts from "./AreaCharts";

import styles from "./styles";

export default class Charts extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <AreaCharts />

        </View>
      </ScrollView>
    );
  }
}