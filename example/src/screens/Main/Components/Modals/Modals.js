import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  SafeAreaView
} from "react-native";
import styles from "./styles";

export default class Modals extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.Item}>
          <Text style={{ fontSize: 28, marginBottom: 10 }}>Basic Modal</Text>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <SafeAreaView style={{ marginTop: 22 }}>
              <View style={{ alignItems: "center" }}>
                <Text>Basic Modal</Text>

                <TouchableOpacity
                  style={styles.btnShowModal}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={{ color: "white" }}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          </Modal>

          <TouchableOpacity
            style={styles.btnShowModal}
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text style={{ color: "white" }}>Show Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
