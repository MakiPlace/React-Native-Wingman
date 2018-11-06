import React, { Component } from "react";
import { View, Text } from "react-native";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";

import styles from "./styles";

export default class ActivityIndicators extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.Item}>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>
              Bubbles Activity Indicator{" "}
            </Text>
            <Bubbles size={10} color="#1CAFF6" />
          </View>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>Bars Activity Indicator </Text>
            <Bars size={10} color="#1CAFF6" />
          </View>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>Pulse Activity Indicator </Text>
            <Pulse size={10} color="#1CAFF6" />
          </View>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>
              DoubleBounce Activity Indicator{" "}
            </Text>
            <DoubleBounce size={10} color="#1CAFF6" />
          </View>
        </View>
      </View>
    );
  }
}
