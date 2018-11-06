import React from "react";
import { View } from "react-native";

import styles from "./styles";

export default class Detail extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {this.props.navigation.getParam("content", null)}
      </View>
    );
  }
}
