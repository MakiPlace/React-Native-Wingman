import React, { Component } from "react";
import { Text, View, ListView, Image } from "react-native";
import Row from "./Row";

import styles from "./styles";

export default class GridView extends Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 0; i < 17; i++) {
      data.push({
        first: "Cell",
        last: i,
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
        contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={data => <Row {...data} />}
      />
    );
  }
}
