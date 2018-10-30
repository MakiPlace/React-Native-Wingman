import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Row = props => (
  <View style={styles.options}>
    <Image style={styles.avatar} source={props.avatar} />
    <View>
      <Text style={styles.textCell}>{`${props.first} ${props.last}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  options: {
    alignItems: "center",
    padding: 8,
    margin: 8,
    backgroundColor: "#F6F6F6",
    width: "25%",
    height: "15%"
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21
  },
  textCell: {
    fontWeight: "bold",
    marginTop: 5
  }
});
export default Row;
