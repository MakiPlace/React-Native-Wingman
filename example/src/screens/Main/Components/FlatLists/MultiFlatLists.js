import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput
} from "react-native";
import styles from "./styles";

class MultiFlatLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      numColumns: 2
    };
    this.viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };
  }

  handleViewableItemsChanged = (info) => {
    console.log(info);
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        first: "Name",
        last: i,
        email: "example" + i + "@gmail.com",
        avatar: require("../../../../assets/img/avatar.png")
      });
    }
    console.log(data);
    this.setState({
      data: data,
      loading: false,
      refreshing: false
    });
  };

  _onChangeNumColumns = numColumns => {
    this.setState(() => ({ numColumns: Number(numColumns) }));
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(() => {
      this.makeRemoteRequest();
    });
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
    if (!this.state.loading) return null;

    return (
      <View style={styles.headerFooter}>
        <Text>LIST FOOTER</Text>
        <ActivityIndicator animating size="large" />
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
            <View
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
            </View>
          )}
          numColumns={this.state.numColumns || 1}
          keyExtractor={item => item.email}
          key={this.state.numOfColumns}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
          onViewableItemsChanged={this.handleViewableItemsChanged}
          viewabilityConfig={this.viewabilityConfig}
        />
      </View>
    );
  }
}

export default MultiFlatLists;
