import React, { Component } from "react";
import { Text, View, ListView } from "react-native";
import Row from "./Row";

import styles from "./styles";

export default class SingleColumn extends Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 0; i < 10; i++) {
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
      <View style={styles.wrapper}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={data => <Row {...data} />}
          renderSeparator={this._renderSeparator}
        />
      </View>
    );
  }
}
