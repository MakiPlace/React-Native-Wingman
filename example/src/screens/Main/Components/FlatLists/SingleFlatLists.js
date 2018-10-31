import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import styles from "./styles";

class SingleFlatLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        key: i,
        first: "Name",
        last: i,
        email: "example" + i + "@gmail.com",
        avatar: require("../../../../assets/img/avatar.png")
      });
    }
    this.setState({
      data: data
    });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "16%"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.headerFooter}>
        <Text>LIST HEADER</Text>
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View style={styles.headerFooter}>
        <Text>LIST FOOTER</Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        key={this.state.key}
        renderItem={({ item }) => (
          <View style={styles.options}>
            <Image style={styles.avatar} source={item.avatar} />
            <View>
              <Text>{`${item.first} ${item.last}`}</Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={this.renderSeparator}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

export default SingleFlatLists;
