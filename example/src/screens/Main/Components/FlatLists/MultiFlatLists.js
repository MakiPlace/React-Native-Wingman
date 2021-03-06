import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

class MultiFlatLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      data: [],
      numColumns: 2
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
    console.log(data);
    this.setState({
      data: data
    });
  };

  _onChangeNumColumns = numColumns => {
    this.setState(() => ({ numColumns: Number(numColumns) }));
  };

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
      <View style={styles.searchRow}>
        <View style={styles.row}>
          <Text> numColumns: </Text>
          <TextInput
            clearButtonMode="never"
            onChangeText={this._onChangeNumColumns}
            value={this.state.numColumns ? String(this.state.numColumns) : ""}
          />
        </View>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.options,
                {
                  flex: 1,
                  backgroundColor: "#fff",
                  borderRadius: 10
                }
              ]}
            >
              <Image style={styles.avatar} source={item.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.exampleText}>{`${item.first} ${
                  item.last
                }`}</Text>
                <Text style={styles.exampleText}>{item.email}</Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={this.state.numColumns || 1}
          key={this.state.key}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

export default MultiFlatLists;
