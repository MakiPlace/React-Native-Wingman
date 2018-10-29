import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import styles from "./styles";

export default class Pickers extends Component {
  state = { language: "", language2: "" };
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.Item}>
          <Text>Dialog Picker</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 200 }}
            mode="dialog"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language: itemValue })
            }
          >
            <Picker.Item label="React" value="react" />
            <Picker.Item label="React Native" value="react-native" />
          </Picker>
        </View>

        <View style={styles.Item}>
          <Text>Dropdown Picker</Text>
          <Picker
            selectedValue={this.state.language2}
            style={{ height: 50, width: 200 }}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ language2: itemValue })
            }
          >
            <Picker.Item label="React" value="react" />
            <Picker.Item label="React Native" value="react-native" />
          </Picker>
        </View>
      </View>
    );
  }
}
