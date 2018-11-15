import React from "react";
import { Text, View } from "react-native";
import { StackedBarChart } from "react-native-svg-charts";
import styles from "./styles";

export default class StackedBarCharts extends React.PureComponent {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
        oranges: 400
      },
      {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400
      },
      {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400
      },
      {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400
      }
    ];

    const colors = ["#009fff", "#32b2ff", "#66c5ff", "#99d8ff"];
    const keys = ["apples", "bananas", "cherries", "dates"];

    return (
      <View>
        <Text style={styles.title}>Stacked Bar Chart</Text>
        <StackedBarChart
          style={{ height: 200 }}
          keys={keys}
          colors={colors}
          data={data}
          showGrid={false}
          contentInset={{ top: 30, bottom: 30 }}
        />
      </View>
    );
  }
}
