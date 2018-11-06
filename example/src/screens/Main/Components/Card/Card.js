import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Base } from "react-native-wingman";
import styles from "./styles";
export default class Card extends Component {
  render() {
    return (
      <View style={Base.wrapper}>
        <ScrollView>
          <View style={Base.container}>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 3,
                overflow: "hidden"
              }}
            >
              <Image
                source={{ uri: "https://placehold.it/800x600" }}
                resizeMode={"cover"}
                style={{ width: "100%", height: 200 }}
              />
              <Text style={{ padding: 16 }}>Basic Card</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
