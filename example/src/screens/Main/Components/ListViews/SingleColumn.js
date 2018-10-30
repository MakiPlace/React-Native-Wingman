import React, { Component } from "react";
import { Text, View, ListView, Image } from "react-native";

import styles from "./styles";

export default class SingleColumn extends Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        first: "Name",
        last: i,
        email: "example" + i + "@gmail.com",
        avatar: require("../../../../assets/img/avatar.png")
      });
    }
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={data => <Row {...data} />}
        renderSeparator={this._renderSeparator}
      />
    );
  }
}
const Row = props => (
  <View style={styles.options}>
    <Image style={styles.avatar} source={props.avatar} />
    <View>
      <Text>{`${props.first} ${props.last}`}</Text>
      <Text>{props.email}</Text>
    </View>
  </View>
);
