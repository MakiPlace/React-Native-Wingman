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
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    };
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  // User Location

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChange={this.onRegionChange.bind(this)}
        >
          <MapView.Marker title={"Hello"} coordinate={this.state.region} />
        </MapView>

        <View>
          <Text>Latitude : {this.state.latitude} </Text>
          <Text>Longitude : {this.state.longitude} </Text>
          <Text> {this.state.error} </Text>
        </View>
      </View>
    );
  }
}
