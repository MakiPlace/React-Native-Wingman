import React from "react";
import { Text, View } from "react-native";
import { LineChart, Grid } from "react-native-svg-charts";
import styles from "./styles";

export default class LineCharts extends React.PureComponent {
  render() {
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      85,
      91,
      35,
      53,
      -53,
      24,
      50,
      -20,
      -80
    ];

    return (
      <View>
        <Text style={styles.title}>Line Chart</Text>
        <LineChart
          style={{ height: 200 }}
          data={data}
          svg={{ stroke: "#4285f4" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
    );
  }
}
