import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Row = props => (
  <View style={styles.options}>
    <Image style={styles.avatar} source={props.avatar} />
    <View>
      <Text>{`${props.first} ${props.last}`}</Text>
      <Text>{props.email}</Text>
    </View>
  </View>
);
export default Row;
