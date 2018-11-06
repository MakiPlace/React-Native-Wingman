import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default class One extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home"
  });
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Image source={require("../../../assets/img/wingman-rn-logo.png")} style={{ width: 160, height: 105 }} />
        </View>
        <View style={styles.footer}>
          <Text style={[styles.textMuted, styles.textCenter]}>Simple Yet Beautiful React Native UI Library{"\n"}Version 1.0.0</Text>
        </View>
      </View>
    );
  }
}
