import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Navigations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Top Navigation", routeName: "TopNavigation" },
        { name: "BottomNavigation", routeName: "BottomNavigation" }
      ]
    };
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };


  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate(item.routeName);
            }}
            onLongPress={() => {
              this.props.navigation.navigate(item.routeName);
            }}
          >
            <View style={{ padding: 16 }}>
              <Text style={{ fontWeight: "500" }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={item => item.name}
      />
    );
  }
}
