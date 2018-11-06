import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default class Badges extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ marginBottom: 8 }}>Type Capsule</Text>
        <View style={styles.wrapperIcon}>
          <Text style={styles.icon}>6</Text>
          <Text style={[styles.icon, { width: 34 }]}>69</Text>
          <Text style={[styles.icon, { width: 38 }]}>99+</Text>
          <Text style={[styles.icon, { width: 42 }]}>new</Text>
        </View>
        <Text style={styles.title}>Type Square</Text>
        <View style={styles.wrapperIcon}>
          <Text style={[styles.icon, { width: 20, borderRadius: 3 }]}>6</Text>
          <Text style={[styles.icon, { width: 28, borderRadius: 3 }]}>69</Text>
          <Text style={[styles.icon, { width: 32, borderRadius: 3 }]}>99+</Text>
          <Text style={[styles.icon, { width: 34, borderRadius: 3 }]}>new</Text>
        </View>
        <Text style={styles.title}>Type Dot</Text>
        <View style={[styles.icon, { width: 10, height: 10, borderRadius: 5 }]}>
          <Text />
        </View>
      </View>
    );
  }
}
