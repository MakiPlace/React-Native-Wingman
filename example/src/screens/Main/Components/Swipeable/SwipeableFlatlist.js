import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { SwipeableFlatList } from "react-native-swipeable-flat-list";

import styles from "./styles";

export default class SwipeableFlatlist extends Component {
  render() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        first: "Name",
        option1: "Delete",
        option2: "Edit",
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
          <View style={styles.rightOption}>
            <View style={[styles.userAction, { backgroundColor: "#6610f2" }]}>
              <Text style={styles.textOption}>{item.option2}</Text>
            </View>
            <View style={styles.userAction}>
              <Text style={styles.textOption}>{item.option1}</Text>
            </View>
          </View>
        )}
        backgroundColor={"white"}
      />
    );
  }
}
