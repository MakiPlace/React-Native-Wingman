import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

export default class ListViews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Single Column", routeName: "SingleColumn" },
        { name: "Grid View", routeName: "GridView" }
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
