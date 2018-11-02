import React, { Component } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { Base } from "react-native-wingman";
import { Button } from "react-native-wingman";

import styles from "./styles";
export default class Card extends Component {
  render() {
    return (
      <View style={Base.wrapper}>
        <ScrollView>
          <View style={Base.container}>
            {/* //Card 1 */}
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
              <Text style={styles.textTitle}>BASIC CARD</Text>
            </View>

            {/* Card 2 */}

            <View
              style={{
                width: 200,
                height: 200,
                flexDirection: "row",
                borderRadius: 3,
                marginTop: 16
              }}
            >
              <Image
                style={{ width: 200, height: 200, position: "absolute" }}
                source={{ uri: "https://placehold.it/512x512" }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  alignSelf: "flex-end"
                }}
              >
                <Text style={[styles.textTitle, { color: "white" }]}>
                  {"CARD WITH THUMBNAIL"}
                </Text>
                <Text style={{ color: "white", margin: 6 }}>{"Subtitle"}</Text>
              </View>
            </View>

            {/* Card 3 */}

            <View
              style={{
                width: "100%",
                height: 300,
                flexDirection: "row",
                marginTop: 16,
                borderRadius: 3
              }}
            >
              <Image
                style={{ width: "100%", height: 200, position: "absolute" }}
                source={{ uri: "https://placehold.it/800x600" }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#ffffff",
                  alignSelf: "flex-end"
                }}
              >
                <Text style={styles.textTitle}>{"CARD WITH IMAGE "}</Text>
                <Text style={{ color: "black", margin: 6 }}>{"Subtitle"}</Text>

                <Button
                  style={styles.buttonSingle}
                  primary
                  full
                  title="</> VIEW MORE"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
