import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  SafeAreaView
} from "react-native";
import FancyModal from "./FancyModal";
import BasicModal from "./BasicModal";
import BottomHalfModal from "./BottomHalfModal";
import TopHalfModal from "./TopHalfModal";

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
          <BasicModal />

          <FancyModal />

          <BottomHalfModal />

          <TopHalfModal />
        </View>
      </View>
    );
  }
}
