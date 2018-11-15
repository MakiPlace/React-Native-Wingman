import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import AreaCharts from "./AreaCharts";
import BarCharts from "./BarCharts";
import LineCharts from "./LineCharts";
import PieCharts from "./PieCharts";
import StackedBarCharts from "./StackedBarCharts ";

import styles from "./styles";

export default class Charts extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <AreaCharts />

          <BarCharts />

          <LineCharts />

          <PieCharts />

          <StackedBarCharts />
        </View>
      </ScrollView>
    );
  }
}