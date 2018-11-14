import React, { Component } from "react";
import { Text, View } from "react-native";

import MapView from "react-native-maps";
import styles from "./styles";

export default class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 21.0094898,
        longitude: 105.8253634,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
    console.log(this.state.region);
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        />
      </View>
    );
  }
}
