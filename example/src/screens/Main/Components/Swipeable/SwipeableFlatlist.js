import React, { Component } from "react";
import {
  View,
  SwipeableFlatList,
  Image,
  Text,
  TouchableHighlight,
  Alert
} from "react-native";
import styles from "./styles";

class SwipeableFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  _renderQuickActions() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            Alert.alert(
              "Tips",
              "You could do something with this edit action!"
            );
          }}
        >
          <Text>Edit</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonDestructive]}
          onPress={() => {
            Alert.alert(
              "Tips",
              "You could do something with this remove action!"
            );
          }}
        >
          <Text style={styles.actionButtonText}>Remove</Text>
        </TouchableHighlight>
      </View>
    );
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        first: "Name",
        last: i,
        email: "example" + i + "@gmail.com",
        avatar: require("../../../../assets/img/avatar.png")
      });
    }
  };

  render() {
    return (
      <SwipeableFlatList
        data={this.state.data}
        bounceFirstRowOnMount={true}
        maxSwipeDistance={160}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image style={styles.rowIcon} source={item.avatar} />
            <View>
              <Text>{`${item.first} ${item.last}`}</Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
        renderQuickActions={this._renderQuickActions.bind(this)}
      />
    );
  }
}

export default SwipeableFlatlist;
