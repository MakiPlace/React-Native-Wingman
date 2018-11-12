import React from "react";
import { Text, View } from "react-native";
import { BarChart, Grid } from "react-native-svg-charts";
import styles from "./styles";

export default class BarCharts extends React.PureComponent {
  render() {
    const fill = "rgb(134, 65, 244)";
    const data = [
      50,
      10,
      40,
      95,
      -4,
      -24,
      null,
      85,
      undefined,
      0,
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
        <Text style={styles.title}>Bar Chart</Text>
        <BarChart
          style={{ height: 200 }}
          data={data}
          svg={{ fill: "#4285f4" }}
          contentInset={{ top: 30, bottom: 30 }}
        >
          <Grid />
        </BarChart>
      </View>
    );
  }
}
