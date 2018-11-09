import React, { Component } from "react";
import { View, Text } from "react-native";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";

import styles from "./styles";

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.Item}>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>Bubbles Loading</Text>
            <Bubbles size={10} color="#1CAFF6" />
          </View>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>Bars Loading </Text>
            <Bars size={10} color="#1CAFF6" />
          </View>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>Pulse Loading </Text>
            <Pulse size={10} color="#1CAFF6" />
          </View>
          <View style={styles.Item}>
            <Text style={{ marginBottom: 10 }}>DoubleBounce Loading</Text>
            <DoubleBounce size={10} color="#1CAFF6" />
          </View>
        </View>
      </View>
    );
  }
}
