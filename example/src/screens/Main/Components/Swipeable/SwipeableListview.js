import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { SwipeableFlatList } from "react-native-swipeable-flat-list";

import styles from "./styles";

export default class SwipeableFlatlist extends Component {
  render() {
    const data = [];
    for (let i = 0; i < 3; i++) {
      data.push({
        key: i,
        first: "Name",
        option: "Remove",
        last: i,
        email: "example" + i + "@gmail.com",
        avatar: require("../../../../assets/img/avatar.png")
      });
    }
    return (
      <SwipeableFlatList
        data={data}
        key={data.key}
        renderItem={({ item }) => (
          <View style={styles.options}>
            <Image style={styles.avatar} source={item.avatar} />
            <View>
              <Text>{`${item.first} ${item.last}`}</Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
        renderRight={({ item }) => (
          <View style={styles.userAction}>
            <Text style={styles.textOption}>{item.option}</Text>
          </View>
        )}
        backgroundColor={"white"}
      />
    );
  }
}
