import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

class ElementItemFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Get data from props
    const { data, index } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(index)}
        activeOpacity={0.5}
        style={Styles.container}
      >
        <Text>{data}</Text>
      </TouchableOpacity>
    );
  }
}

const { width } = Dimensions.get("window");
const Styles = StyleSheet.create({
  container: {
    marginStart: 16,
    backgroundColor: "#fff",
    height: 45,
    width: width,
    justifyContent: "center",
    borderBottomColor: "#eeeeee",
    borderBottomWidth: 1
  }
});
export default ElementItemFlatlist;
