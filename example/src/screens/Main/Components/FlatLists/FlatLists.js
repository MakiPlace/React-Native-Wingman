import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

export default class FlatLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Single Column", routeName: "SingleFlatLists" },
        { name: "Multi Column", routeName: "MultiFlatLists" }
      ]
    };
  } 

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
