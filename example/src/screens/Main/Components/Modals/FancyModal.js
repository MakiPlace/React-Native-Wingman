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

export default class FancyModal extends Component {
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
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <SafeAreaView
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.8)"
            }}
          >
            <View
              style={{
                flex: 0.2,
                width: "85%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: 10
              }}
            >
              <Text
                style={{
                  marginBottom: 20,
                  textAlign: "center",
                  color: "black"
                }}
              >
                This modal was presented with fade animation .{"\n"} It is
                currently display in fancy mode
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
            title="Fancy Modal"
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
        </View>
      </View>
    );
  }
}
