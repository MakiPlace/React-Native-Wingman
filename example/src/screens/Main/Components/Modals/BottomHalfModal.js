import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  SafeAreaView
} from "react-native";
import { Button } from "react-native-wingman";

import styles from "./styles";

export default class BottomHalfModal extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              backgroundColor: "transparent"
            }}
          >
            <View
              style={{
                flex: 0.2,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white"
              }}
            >
              <Text
                style={{
                  marginBottom: 20,
                  textAlign: "center",
                  color: "black"
                }}
              >
                This modal was presented with slide animation .{"\n"} It is
                currently display in bottom halft mode
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>

        <View style={styles.btnShowModal}>
          <Button
            style={styles.buttonSingle}
            primary
            block
            title="Bottom Half Modal"
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
        </View>
      </View>
    );
  }
}
