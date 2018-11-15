import React from "react";
import { Text, View } from "react-native";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import styles from "./styles";

export default class AreaCharts extends React.PureComponent {
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
        <Text style={styles.title}>Area Chart</Text>
        <AreaChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: "#4285f4" }}
        >
          <Grid />
        </AreaChart>
      </View>
    );
  }
}